import { useState } from 'react'
import * as S from './style'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginUser } from '../../hooks/useLogin'
import Alert from '../common/alert'

interface UserInput {
  email: string
  password: string
}

function LoginForm() {
  const [userInput, setUserInput] = useState<UserInput>({ email: '', password: '' })
  const [isShownPasswrod, setIsShownPassword] = useState(false)

  const { mutate: loginUser, isError, isOpen } = useLoginUser()
  const navigate = useNavigate()

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

  const handleTogglePassword = () => {
    setIsShownPassword(!isShownPasswrod)
  }

  return (
    <>
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
          <S.PasswordButton type="button" onClick={handleTogglePassword} isShown={isShownPasswrod} />
        </S.Label>
        <S.ErrorWrapper>
          {isError && <S.ErrorMessage>사용자의 이메일 혹은 비밀번호를 확인해주세요.</S.ErrorMessage>}
        </S.ErrorWrapper>
        <S.SigninButton type="submit">로그인</S.SigninButton>
        <S.SignupWrapper>
          아직 회원이 아니신가요?
          <Link to="/register">
            <S.SignupButton>회원가입</S.SignupButton>
          </Link>
        </S.SignupWrapper>
      </S.Form>
      <Alert isOpen={isOpen} onClose={() => navigate('/')} message="로그인 성공" />
    </>
  )
}

export default LoginForm
