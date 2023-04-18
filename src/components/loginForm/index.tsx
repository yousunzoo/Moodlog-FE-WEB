import React from 'react'
import { Button, Container, Input, Title, Form, Signup, Span } from './style'

function LoginForm() {
  return (
    <Form>
      <Title>MoodLog</Title>
      <Input type="email" placeholder="사용자 이메일" />
      <Input type="password" placeholder="비밀번호" />
      <Button type="submit">로그인</Button>
      <Signup>
        아직 회원이 아니신가요? <Span>회원가입</Span>
      </Signup>
    </Form>
  )
}

export default LoginForm
