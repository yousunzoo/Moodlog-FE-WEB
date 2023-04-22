import axios from 'axios'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import * as S from './style'
import { Link } from 'react-router-dom'
import { useLoginUser } from '../../hooks/useLogin'

interface UserInput {
  email: string
  password: string
}

function LoginForm() {
  const [userInput, setUserInput] = useState<UserInput>({ email: '', password: '' })
  const [isShownPasswrod, setIsShownPassword] = useState(false)
  const loginUser = useLoginUser()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserInput({
      ...userInput,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    loginUser(userInput)
  }

  const handletogglePassword = () => {
    setIsShownPassword(!isShownPasswrod)
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Label>
        <S.Input
          type="email"
          name="email"
          placeholder="사용자 이메일"
          onChange={handleChange}
          value={userInput.email}
        />
      </S.Label>

      <S.Label>
        <S.Input
          type={isShownPasswrod ? 'text' : 'password'}
          name="password"
          placeholder="비밀번호"
          onChange={handleChange}
          value={userInput.password}
        />
        <S.PasswordButton type="button" onClick={handletogglePassword} isShown={isShownPasswrod} />
      </S.Label>

      <S.Button type="submit">로그인</S.Button>
      <S.SignupWrapper>
        아직 회원이 아니신가요?
        <Link to="/register">
          <S.SignupButton>회원가입</S.SignupButton>
        </Link>
      </S.SignupWrapper>
    </S.Form>
  )
}

export default LoginForm
