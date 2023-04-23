import React, { useEffect, useState } from 'react'
import * as S from './style'
import { Posts } from '../../components/common/post/posts'
import axios from 'axios'
import { useQuery } from 'react-query'
import { axiosInstance } from '../../apis/axios'
import { NewUser } from '../../types'
import { NewPost } from '../../types'
import { UserStyle } from '../../types'
import { getUser } from '../../apis/auth'
import Nav from '../../components/common/Nav'
import { useParams } from 'react-router-dom'

function UserDetails({ name, number, link }: UserStyle) {
  return (
    <S.StyledLink to={link}>
      <S.UserDetailContnetText size="large">{number}</S.UserDetailContnetText>
      <S.UserDetailContnetText size="small">{name}</S.UserDetailContnetText>
    </S.StyledLink>
  )
}

function ProfilePage() {
  const params = useParams()
  // const [data, setData] = useState<NewUser[]>([])
  const [post, setPost] = useState<NewPost[]>([])
  const [like, setLike] = useState<number>(0)
  const [follower, setFollower] = useState([])

  const { data, isLoading, error } = useQuery<NewUser>(
    'user',
    () =>
      getUser(params.id).then((a) => {
        return a
      }),
    { staleTime: 10000, cacheTime: 1000 * 40 },
  )

  useEffect(() => {
    if (typeof data === 'object') {
      setPost((post) => data.post)
      setLike((like) => data.likes.length)
      setFollower((follower) => data.follower)
    }
  }, [data])

  if (!data) return
  return (
    <div>
      {/* 유저 프로필 */}
      <S.UserProfile>
        <S.UserSettingBtn>
          <img src="/public/assets/icons/setting.png" width="100%" />
          설정
        </S.UserSettingBtn>
        <S.UserImage>
          <img src={isLoading ? '' : data.profile_image} />
        </S.UserImage>
        <S.UserName>{isLoading ? 'loading' : data.username}</S.UserName>
        <S.UserIntro>{isLoading ? 'loading' : data?.profile_message}</S.UserIntro>
        {/* 유저 세부사항 */}
        <S.UserDetail>
          <UserDetails
            name="팔로워"
            number={isLoading ? 0 : (follower?.length as number)}
            link={`/follow/${params.id}`}
          />
          <S.UserDetailIine left="108px" />
          <UserDetails name="좋아요" number={like} link="" />
          <S.UserDetailIine left="230px" />
          <UserDetails
            name="일기 개수"
            number={isLoading ? 0 : (post?.length as number)}
            link={`/calendar/${params.id}`}
          />
        </S.UserDetail>
      </S.UserProfile>
      {/* 유저 다이어리 */}
      <S.Postss>
        <Posts posts={post} height="477px" type={false} />
      </S.Postss>
      <Nav />
    </div>
  )
}

export default ProfilePage
