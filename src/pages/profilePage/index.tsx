import { useEffect, useState } from 'react'
import * as S from './style'
import { Posts } from '../../components/common/post/posts'
import { useQuery } from 'react-query'
import { getUser } from '../../apis/auth'
import Nav from '../../components/common/Nav'
import { useParams } from 'react-router-dom'
import useUserData from '../../hooks/useUserData'
import { NewUser } from '../../types/user'
import { NewPost } from '../../types/diary'
import { FollowParent } from '../../types/follow'
import Loading from '../../components/common/loading'
import { MdSettings } from 'react-icons/md'
import { MdClose } from 'react-icons/md'

interface UserStyle {
  name: string
  number: number
  link: string
}

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
  const { data: own, refetch } = useUserData()
  const [post, setPost] = useState<NewPost[]>([])
  const [like, setLike] = useState<number>(0)
  const [follower, setFollower] = useState<FollowParent[]>([])
  const { data, isLoading, error } = useQuery<NewUser>(
    ['user', 'profile', params.id],
    () =>
      getUser(Number(params.id)).then((a) => {
        return a
      }),
    { staleTime: 10000, cacheTime: 10000 * 20 },
  )

  useEffect(() => {
    if (typeof data === 'object') {
      setPost((post) => data.post)
      setLike((like) => data.likes.length)
      setFollower((follower) => data.follower)
    }
  }, [data])

  const filteredPosts = () => {
    if (!post) return

    const sortedPosts = post.sort((a, b) => {
      if (a.id > b.id) {
        return -1
      } else {
        return 1
      }
    })
    return sortedPosts
  }

  if (!data) return <Loading />

  return (
    <div>
      {/* 유저 프로필 */}
      <S.UserProfile>
        {typeof own !== 'undefined' && Number(own.id) === Number(data.id) ? (
          <S.UserSettingLink to={'/setting'}>
            설정
            <MdSettings />
          </S.UserSettingLink>
        ) : (
          <></>
        )}
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
        <Posts posts={filteredPosts() || post} isShownUsername={false} />
      </S.Postss>
      <Nav />
    </div>
  )
}

export default ProfilePage
