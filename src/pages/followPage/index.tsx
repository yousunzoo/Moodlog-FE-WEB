import { Link, useParams } from 'react-router-dom'
import Calendars from '../../components/calendar'
import { TopbarWrapper } from '../../styles/common'
import * as S from './style'

function Follow() {
  return (
    <S.Follow>
      <S.FollowImg />
      <S.FollowUserId>
        <h1>UserId</h1>
        <h2>username</h2>
      </S.FollowUserId>
      <S.FollowBtn>팔로잉</S.FollowBtn>
    </S.Follow>
  )
}

function FollowPage() {
  const params = useParams()

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
        {[1, 2, 3].map((arr) => {
          return <Follow />
        })}
      </S.Follows>
    </>
  )
}

export default FollowPage
