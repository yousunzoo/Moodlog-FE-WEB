import React from 'react'
import RegisterForm from '../../components/registerForm'
import * as S from './style'
import CloseButton from '../../components/common/button/closeButton'
import Logo from '../../components/common/logo'

function RegisterPage() {
  return (
    <S.Wrapper>
      <CloseButton />
      <Logo size={200} />
      <RegisterForm />
    </S.Wrapper>
  )
}

export default RegisterPage
