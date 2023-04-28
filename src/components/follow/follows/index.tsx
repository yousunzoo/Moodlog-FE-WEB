import * as S from './style'
import { FollowListProp } from '../../../types/follow'
import Follow from '../follow'

function FollowList({ following, follower, own }: FollowListProp) {
  // following은 로그인한 유저가 팔로잉하고 있는 유저들의 id 값을 배열로 나타낸 것이며
  // floower는 팔로잉 되어 있는 유저 정보를 배열 형태로 담은 데이터이며
  // own은 로그인한 유저의 id 값이다.
  return (
    <S.Follows>
      {follower.map((arr, i) => {
        if (arr.following.id && typeof own === 'undefined') {
          return <></>
        } else {
          return <Follow key={i} follower={arr} following={following} own={Number(own)} />
        }
      })}
    </S.Follows>
  )
}

export default FollowList
