import React from 'react'
import * as S from './style'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <S.Wrapper>
      <Link to="/">
        <S.NavItem data-action="home" />
      </Link>

      <Link to="/diaryCreate">
        <S.NavItem data-action="write" />
      </Link>

      <Link to="/profile">
        <S.NavItem data-action="followers" />
      </Link>
    </S.Wrapper>
  )
}

export default Nav
