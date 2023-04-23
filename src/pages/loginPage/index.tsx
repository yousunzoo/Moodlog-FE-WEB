import React from 'react'
import LoginForm from '../../components/loginForm'
import * as S from './style'
import Logo from '../../components/common/logo'

function LoginPage() {
  return (
    <S.Wrapper>
      <Logo size={250} />
      <LoginForm />
    </S.Wrapper>
  )
}

export default LoginPage
