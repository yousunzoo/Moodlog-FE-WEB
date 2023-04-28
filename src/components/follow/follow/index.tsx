import * as S from './style'
import { following as postFollow } from '../../../apis/diary'
import { FollowProp } from '../../../types/follow'
import { useState } from 'react'
import useUserData from '../../../hooks/useUserData'

function Follow({ follower, following, own }: FollowProp) {
  // follower는 유저에 관한 객체형식의 데이터이며,
  // following은 로그인한 유저가 팔로잉하고 있는 유저들의 id 값을 배열로 나타낸 것이며
  // own은 로그인한 유저의 id 값이다.

  // 팔로잉을 하기 위한 함수
  const addFollow = () => postFollow(Number(follower.following.id))
  // 팔로잉 버튼 클릭시 데이터 갱신까지 시간이 걸릴 경우를 대비하여 프론트 내에서 임의 구현
  const [name, setName] = useState(['팔로우', '팔로잉'])
  const { refetch } = useUserData()

  return (
    <S.Follow>
      <S.FollowImg>
        {follower.following.profile_image ? <img src={follower.following.profile_image} /> : <div></div>}
      </S.FollowImg>
      <S.FollowUserIdLink to={`/profile/${follower.following.id}`}>
        <p className="email">{follower.following.email}</p>
        <p className="username">{follower.following.username}</p>
      </S.FollowUserIdLink>
      {
        // 상대를 팔로잉한 사람이 본인인지 아닌지에 따라
        own !== Number(follower.following.id) ? (
          <S.FollowBtn
            // 팔로잉인지 팔로우인지에 따라 투명도 변경
            following={name[0] === '팔로우' ? true : false}
            onClick={() => {
              // 버튼 클릭 시 팔로잉, 팔로우 변경 및 팔로우 함수 호출
              addFollow()
              refetch
              name[0] === '팔로우' ? setName(['팔로잉', '팔로우']) : setName(['팔로우', '팔로잉'])
            }}
          >
            {
              // 팔로우인지 팔로잉인지에 따라 텍스트 변경
              following.includes(follower.following.id) ? name[0] : name[1]
            }
          </S.FollowBtn>
        ) : (
          <S.FollowNotBtn>
            <p>본인</p>
          </S.FollowNotBtn>
        )
      }
    </S.Follow>
  )
}

export default Follow
