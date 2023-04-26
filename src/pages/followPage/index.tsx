import { Link, useParams } from 'react-router-dom'
import Calendars from '../../components/calendar'
import { TopbarWrapper } from '../../styles/common'
import * as S from './style'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useEffect, useState } from 'react'
import { getUser } from '../../apis/auth'
import useUserData from '../../hooks/useUserData'
import { following as postFollow } from '../../apis/diary'
import { FollowParent, FollowingParent } from '../../types/follow'
import { NewUser } from '../../types/user'
import Loading from '../../components/common/loading'
import FollowList from '../../components/follow/follows'

function FollowPage() {
  const params = useParams()
  const { data: own } = useUserData()

  const [following, setFollowing] = useState<number[]>([])
  const [follower, setFollower] = useState<FollowParent[]>([])

  const { data, isLoading, error } = useQuery<NewUser>(['user', { page: params.id }], () =>
    getUser(Number(params.id)).then((a) => {
      return a
    }),
  )

  useEffect(() => {
    // 내가 방문한 페이지의 유저를 팔로잉한 사람들의 데이터
    if (typeof data !== 'undefined') {
      setFollower((follower) => data.follower)
    }
    //
    if (typeof own !== 'undefined') {
      setFollowing([])
      for (const followingData of own.following) {
        setFollowing((following) => [...following, followingData.follower.id])
      }
    }
  }, [data])

  if (!data || !own) return <Loading />

  return (
    <>
      <TopbarWrapper>
        <S.TopBar>
          <S.TopBarLink to={`/profile/${params.id}`}>닫기</S.TopBarLink>
          <S.TopTitle>팔로워 목록</S.TopTitle>
        </S.TopBar>
      </TopbarWrapper>
      <FollowList following={following} follower={follower} own={own.id} />
    </>
  )
}
export default FollowPage
