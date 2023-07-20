import * as S from './style'
import { Outlet } from 'react-router-dom'
import Loading from '../loading'

function Layout() {
  return (
    <S.Wrapper>
      <Loading />
      <Outlet />
    </S.Wrapper>
  )
}

export default Layout
