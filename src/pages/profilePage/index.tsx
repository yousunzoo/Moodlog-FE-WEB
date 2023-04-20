import React, { useEffect, useState } from 'react'
import * as S from './style'
import Post from '../../components/common/post'
import axios from 'axios'
import { useQuery } from 'react-query'
import { axiosInstance } from '../../apis/axios'
import { NewUser } from '../../types'
import { NewPost } from '../../types'
import { UserStyle } from '../../types'

function UserDetails({ name, number }: UserStyle) {
  return (
    <S.UserDetailContnet>
      <S.UserDetailContnetText size="large">{number}</S.UserDetailContnetText>
      <S.UserDetailContnetText size="small">{name}</S.UserDetailContnetText>
    </S.UserDetailContnet>
  )
}

function ProfilePage() {
  // const [data, setData] = useState<NewUser[]>([])
  const [post, setPost] = useState<NewPost[]>([])
  const { data, isLoading, error } = useQuery<NewUser>('user', () =>
    axiosInstance
      .get(`/auth/user`, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImlhdCI6MTY4MTkxNTMxMCwiZXhwIjoxNjgxOTE4OTEwfQ.thFRO-N-6GTe9ZZCIGuM5AS0Mkv1RHWOkDgIHH94dVg',
        },
      })
      .then((a) => {
        setPost(() => a.data.post)
        return a.data
      }),
  )
  console.log(data) // 성공시 true
  console.log(isLoading) // 로딩중일 때 true
  console.log(error) // 실패시 true

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axiosInstance.get(`/auth/user`, {
  //         headers: {
  //           Authorization:
  //             'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImlhdCI6MTY4MTkwMjgyMywiZXhwIjoxNjgxOTA2NDIzfQ.SDwdsTYLmXpusk8rw0FAdAvS_7sa6W-djGtlJMS9XAs',
  //         },
  //       })
  //       setData(res.data)
  //       setPost(res.data.post)
  //       console.log('success', res.data)
  //     } catch (e) {
  //       console.log('fail: ', e)
  //     }
  //   }
  //   fetchData()
  // }, [])
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
          <UserDetails name="팔로워" number={isLoading ? 0 : (data.follower?.length as number)} />
          <S.UserDetailIine left="108px" />
          <UserDetails name="좋아요" number={isLoading ? 0 : (data.follower?.length as number)} />
          <S.UserDetailIine left="230px" />
          <UserDetails name="일기 개수" number={isLoading ? 0 : (post?.length as number)} />
        </S.UserDetail>
      </S.UserProfile>
      {/* 유저 다이어리 */}
      <S.Posts>
        {post.map((arr, i) => {
          return <Post key={i} arr={arr} />
        })}
      </S.Posts>
    </div>
  )
}

export default ProfilePage
