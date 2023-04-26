import { useMutation } from 'react-query'
import { following } from '../../apis/diary'
import useUserData from '../../hooks/useUserData'
import { SearchedUserResponse } from '../../types/user'
import * as S from './style'
import { useState, useEffect } from 'react'
import { queryClient } from './../../utils/queryClient'

interface SearchedUserProps {
  user: SearchedUserResponse
}

type FollowToggle = '팔로우' | '팔로잉'

function SearchedUser({ user }: SearchedUserProps) {
  const { data: myData, refetch } = useUserData()
  const [followToggle, setFollowToggle] = useState<FollowToggle>('팔로우')

  const { mutate } = useMutation(() => following(Number(user.id)), {
    onSuccess: () => {
      refetch()
      queryClient.invalidateQueries('user')
    },
  })

  useEffect(() => {
    const following = myData?.following
    setFollowToggle(following?.some((follow) => follow.follower.id === user.id) ? '팔로잉' : '팔로우')
  }, [myData])

  return (
    <S.User>
      <S.UserImg>
        <img src={user.profile_image === '' ? '/assets/icons/profile.png' : user.profile_image} alt="" />
      </S.UserImg>
      <S.FollowUserIdLink to={`/profile/${user.id}`}>
        <h2>{user.username}</h2>
        <h3>{user.email}</h3>
      </S.FollowUserIdLink>
      <S.FollowBtn opacity={followToggle === '팔로잉' ? 0.7 : 1} onClick={() => mutate()}>
        {followToggle}
      </S.FollowBtn>
    </S.User>
  )
}

export default SearchedUser
