import React from 'react'
import * as S from './style'
import { Outlet } from 'react-router-dom'
import useStore from '../../../store'

function Layout() {
  const { font } = useStore()
  return (
    <S.Wrapper font={font}>
      <Outlet />
    </S.Wrapper>
  )
}

export default Layout
