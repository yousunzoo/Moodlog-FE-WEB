import React from 'react'
import * as S from './style'
import { Link } from 'react-router-dom'
import useUserData from '../../../hooks/useUserData'
import { useMutation } from 'react-query'

function Nav() {
  const { data: user, own } = useUserData()

  return (
    <S.Wrapper>
      <Link to="/">
        <S.NavItem src="../../../public/assets/icons/home-nav.png" />
      </Link>

      <Link to="/diaryCreate">
        <S.NavItem src="../../../public/assets/icons/write-nav.png" />
      </Link>

      <Link to={typeof own === 'undefined' ? `/` : `/profile/${Number(own.id)}`}>
        <S.NavItem src="../../../public/assets/icons/user.png" />
      </Link>
    </S.Wrapper>
  )
}

export default Nav
