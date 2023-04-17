import React from 'react'
import { Button, Container, Input, Title, Form } from './style'

function LoginForm() {
  return (
    <Form>
      <Title>MoodLog</Title>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button type="submit">Login</Button>
    </Form>
  )
}

export default LoginForm
