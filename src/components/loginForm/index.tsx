import axios from 'axios'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import * as S from './style'
import { useNavigate } from 'react-router-dom'

interface UserInput {
  email: string
  password: string
}

function LoginForm() {
  const [userInput, setUserInput] = useState<UserInput>({ email: '', password: '' })
  const [cookies, setCookie, removeCookie] = useCookies()
  const navigate = useNavigate()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserInput({
      ...userInput,
      [name]: value,
    })
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:3000/auth/login', userInput)
      // setCookie('accessToken', response.data['accessToken'], { path: '/' })
      // 백엔드가 진짜라면 userId 쿠키에 필요없음, 어차피 accessToken 에 담겨있음
      // setCookie('userId', response.data['user']['id'], { path: '/' })

      navigate('/') // 홈으로 이동합니다.
    } catch (error) {
      alert('아이디와 비밀번호를 확인해주세요.')
      setUserInput({ email: '', password: '' })
      console.error(error)
    }
  }

  return (
    <S.Form onSubmit={onSubmit}>
      <S.Logo src="assets/icons/logo.png" alt="Logo" />
      <S.Input type="email" name="email" placeholder="사용자 이메일" onChange={onChange} value={userInput.email} />
      <S.Input type="password" name="password" placeholder="비밀번호" onChange={onChange} value={userInput.password} />
      <S.Button type="submit">로그인</S.Button>
      <S.Signup>
        아직 회원이 아니신가요? <S.Span>회원가입</S.Span>
      </S.Signup>
    </S.Form>
  )
}

export default LoginForm
