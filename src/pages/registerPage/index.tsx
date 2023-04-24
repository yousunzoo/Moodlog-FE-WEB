import React from 'react'
import RegisterForm from '../../components/registerForm'
import * as S from './style'
import CloseButton from '../../components/common/button/closeButton'
import Logo from '../../components/common/logo'
import { Link } from 'react-router-dom'

function RegisterPage() {
  return (
    <S.Wrapper>
      <Link to={'/login'}>
        <S.CloseButton />
      </Link>
      <Logo size={200} isCenter={true} />
      <RegisterForm />
    </S.Wrapper>
  )
}

export default RegisterPage
