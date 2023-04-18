import React from 'react'
import RegisterForm from '../../components/registerForm'
import * as S from './style'
import CloseButton from '../../components/common/button/closeButton'

function RegisterPage() {
  return (
    <div>
      <CloseButton />
      <S.Logo />
      <RegisterForm />
    </div>
  )
}

export default RegisterPage
