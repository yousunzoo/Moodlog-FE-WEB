import React from 'react'
import * as S from './style'

function LoginForm() {
  return (
    <S.Form>
      <S.Logo src="assets/icons/logo.png" alt="Logo" />
      <S.Input type="email" placeholder="사용자 이메일" />
      <S.Input type="password" placeholder="비밀번호" />
      <S.Button type="submit">로그인</S.Button>
      <S.Signup>
        아직 회원이 아니신가요? <S.Span>회원가입</S.Span>
      </S.Signup>
    </S.Form>
  )
}

export default LoginForm
