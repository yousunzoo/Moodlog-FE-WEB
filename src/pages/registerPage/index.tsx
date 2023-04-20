import React from 'react'
import RegisterForm from '../../components/registerForm'
import * as S from './style'
import CloseButton from '../../components/common/button/closeButton'
import Logo from '../../components/common/logo'

function RegisterPage() {
  return (
    <div>
      <CloseButton />
      <Logo size={200} />
      <RegisterForm />
    </div>
  )
}

export default RegisterPage
