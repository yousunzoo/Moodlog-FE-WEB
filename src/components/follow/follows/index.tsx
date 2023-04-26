import { useQuery } from 'react-query'
import * as S from './style'
import { following as postFollow } from '../../../apis/diary'
import { FollowListProp, FollowParent, FollowProp } from '../../../types/follow'
import Follow from '../follow'

function FollowList({ following, follower, own }: FollowListProp) {
  return (
    <S.Follows>
      {follower.map((arr, i) => {
        if (arr.following.id && typeof own === 'undefined') {
          return <></>
        } else {
          return <Follow key={i} follower={arr} following={following} own={own} />
        }
      })}
    </S.Follows>
  )
}

export default FollowList
