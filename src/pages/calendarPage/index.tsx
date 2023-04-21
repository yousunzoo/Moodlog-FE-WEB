import { Link, useParams } from 'react-router-dom'
import Calendars from '../../components/calendar'
import { TopbarWrapper } from '../../styles/common'
import * as S from './style'

function calendarPage() {
  const params = useParams()

  return (
    <>
      <TopbarWrapper>
        <S.TopBar>
          <Link to={`/profile/${params.id}`}>
            <img src="/public/assets/icons/close.png" />
          </Link>
          <div>캘린더</div>
        </S.TopBar>
      </TopbarWrapper>
      <Calendars />
    </>
  )
}

export default calendarPage
