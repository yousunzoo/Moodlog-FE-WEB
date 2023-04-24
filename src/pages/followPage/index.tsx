import { Link, useParams } from 'react-router-dom'
import Calendars from '../../components/calendar'
import { TopbarWrapper } from '../../styles/common'
import * as S from './style'
import { useQuery } from 'react-query'
import { useEffect, useState } from 'react'
import { getOwn, getUser } from '../../apis/auth'
import { NewUser } from '../../types'

function Follow({ follower }) {
  return (
    <S.Follow>
      <S.FollowImg>
        {follower.following.profile_image ? <img src={follower.following.profile_image} /> : <div></div>}
      </S.FollowImg>
      <S.FollowUserId>
        <h1>{follower.following.email}</h1>
        <h2>{follower.following.username}</h2>
      </S.FollowUserId>
      <S.FollowBtn>팔로잉</S.FollowBtn>
    </S.Follow>
  )
}

function FollowPage() {
  const params = useParams()
  const [follower, setFollower] = useState([])

  if (params.id) {
    const { data, isLoading, error } = useQuery<NewUser>(
      'user',
      () =>
        getUser(Number(params.id)).then((a) => {
          return a
        }),
      { staleTime: 10000, cacheTime: 1000 * 40 },
    )

    useEffect(() => {
      if (typeof data === 'object') {
        setFollower((follower) => data.follower)
      }

      // if (typeof data2 === 'object') {
      //   setMe((me) => me.concat()
      // }
    }, [data])

    return (
      <>
        <TopbarWrapper>
          <S.TopBar>
            <Link to={`/profile/${params.id}`}>
              <img src="/public/assets/icons/close.png" />
            </Link>
            <div>팔로워 목록</div>
          </S.TopBar>
        </TopbarWrapper>
        <S.Follows>
          {follower.length > 0 ? (
            follower.map((arr, i) => {
              return <Follow key={i} follower={arr} />
            })
          ) : (
            <></>
          )}
        </S.Follows>
      </>
    )
  } else {
    return <>/</>
  }
}
export default FollowPage
