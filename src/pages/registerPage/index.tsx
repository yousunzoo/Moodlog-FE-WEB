import React from 'react'
import RegisterForm from '../../components/registerForm'
import * as S from './style'
import { CloseButton } from '../../components/registerForm/style'

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
