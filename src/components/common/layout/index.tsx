import React from 'react'
import * as S from './style'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <S.Wrapper>
      <Outlet />
    </S.Wrapper>
  )
}

export default Layout
