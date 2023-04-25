import React from 'react'
import * as S from './style'
import { Link } from 'react-router-dom'
import useUserData from '../../../hooks/useUserData'
import { useMutation } from 'react-query'

function Nav() {
  const { data: own } = useUserData()

  return (
    <S.Wrapper>
      <Link to="/">
        <S.NavItem data-action="home" />
      </Link>

      <Link to="/diaryCreate">
        <S.NavItem data-action="write" />
      </Link>

      <Link to={typeof own === 'undefined' ? `/` : `/profile/${Number(own.id)}`}>
        <S.NavItem data-action="followers" />
      </Link>
    </S.Wrapper>
  )
}

export default Nav
