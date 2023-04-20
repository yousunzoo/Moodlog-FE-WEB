import React from 'react'
import * as S from './style'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <S.Wrapper>
      <Link to="/">
        <S.NavItem src="../../../public/assets/icons/home-nav.png" />
      </Link>

      <Link to="/diaryCreate">
        <S.NavItem src="../../../public/assets/icons/write-nav.png" />
      </Link>

      <Link to="/profile">
        <S.NavItem src="../../../public/assets/icons/user.png" />
      </Link>
    </S.Wrapper>
  )
}

export default Nav
