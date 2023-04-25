import { useQuery } from 'react-query'
import * as S from './style'
import { following as postFollow } from '../../apis/diary'
import { FollowListProp, FollowParent, FollowProp } from '../../types/follow'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useUserData from '../../hooks/useUserData'
import { NewUser } from '../../types/user'
import { getUser } from '../../apis/auth'
import Loading from '../common/loading'

function Follow({ follower, following }: FollowProp) {
  console.log(follower, following)
  const updateMutation = useQuery('follow', () => postFollow(Number(follower.following.id)))
  const [name, setName] = useState(['팔로우', '팔로잉'])

  return (
    <S.Follow>
      <S.FollowImg>
        {follower.following.profile_image ? <img src={follower.following.profile_image} /> : <div></div>}
      </S.FollowImg>
      <S.FollowUserIdLink to={`/profile/${follower.following.id}`}>
        <h1>{follower.following.email}</h1>
        <h2>{follower.following.username}</h2>
      </S.FollowUserIdLink>
      <S.FollowBtn
        onClick={() => {
          updateMutation
          name[0] === '팔로잉' ? setName(['팔로우', '팔로잉']) : setName(['팔로잉', '팔로우'])
        }}
      >
        {following.includes(follower.following.id) ? name[1] : name[0]}
      </S.FollowBtn>
    </S.Follow>
  )
}

function FollowList({ following, follower, own }: FollowListProp) {
  console.log(following, follower, own)
  return (
    <S.Follows>
      {follower.map((arr, i) => {
        if (arr.following.id && typeof own !== 'undefined' && arr.following.id === own) {
          return <></>
        } else {
          return <Follow key={i} follower={arr} following={following} />
        }
      })}
    </S.Follows>
  )
}

export default FollowList
