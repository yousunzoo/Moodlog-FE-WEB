import { Link, useParams } from 'react-router-dom'
import Calendars from '../../components/calendar'
import { TopbarWrapper } from '../../styles/common'
import * as S from './style'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useEffect, useState } from 'react'
import { getUser } from '../../apis/auth'
import useUserData from '../../hooks/useUserData'
import { following as postFollow } from '../../apis/diary'
import { FollowChild, FollowParent, FollowingParent } from '../../types/follow'
import { NewUser } from '../../types/user'
import Loading from '../../components/common/loading'

function Follow({ follower, following }: FollowChild) {
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

function FollowPage() {
  const params = useParams()
  const { data: own } = useUserData()

  const [following, setFollowing] = useState<number[]>([])
  const [follower, setFollower] = useState<FollowParent[]>([])

  const { data, isLoading, error } = useQuery<NewUser>(
    ['user', { page: params.id }],
    () =>
      getUser(Number(params.id)).then((a) => {
        return a
      }),
    { staleTime: 1000 },
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

  if (!data) return <Loading />

  return (
    <>
      <TopbarWrapper>
        <S.TopBar>
          <S.TopBarLink to={`/profile/${params.id}`}>닫기</S.TopBarLink>
          <S.TopTitle>팔로워 목록</S.TopTitle>
        </S.TopBar>
      </TopbarWrapper>
      <S.Follows>
        {follower.map((arr, i) => {
          if (arr.following.id && typeof own !== 'undefined' && arr.following.id === own.id) {
            return <></>
          } else {
            return <Follow key={i} follower={arr} following={following} />
          }
        })}
      </S.Follows>
    </>
  )
}
export default FollowPage
