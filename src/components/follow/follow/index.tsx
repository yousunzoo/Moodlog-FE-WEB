import { useQuery } from 'react-query'
import * as S from './style'
import { following as postFollow } from '../../../apis/diary'
import { FollowListProp, FollowParent, FollowProp } from '../../../types/follow'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Follow({ follower, following, own }: FollowProp) {
  console.log(follower.following.id)

  const addFollow = () => postFollow(Number(follower.following.id))
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
      {own !== Number(follower.following.id) ? (
        <S.FollowBtn
          opacity={name[0] === '팔로우' ? 0.8 : 1}
          onClick={() => {
            name[0] === '팔로잉' ? setName(['팔로우', '팔로잉']) : setName(['팔로잉', '팔로우'])
            addFollow()
          }}
        >
          {following.includes(follower.following.id) ? name[1] : name[0]}
        </S.FollowBtn>
      ) : (
        <S.FollowNotBtn>
          <p>본인</p>
        </S.FollowNotBtn>
      )}
    </S.Follow>
  )
}

export default Follow
