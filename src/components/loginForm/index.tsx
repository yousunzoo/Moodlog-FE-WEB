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
  const loginUser = useLoginUser()

  const [cookies, setCookie, removeCookie] = useCookies()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserInput({
      ...userInput,
      [name]: value,
    })
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    loginUser(userInput)
  }

  // const queryClient = useQueryClient()
  //   const { data: user } = useQuery(queryKeys.user, () => login(user)), {
  //   //   initialData: getStoredUser,
  //   //   onSuccess: (received: User | null) => {
  //   //     if (!received) {
  //   //       clearStoredUser()
  //   //     } else {
  //   //       setStoredUser(received)
  //   //     }
  //   //   },
  //   // })
  // }

  return (
    <S.Form onSubmit={onSubmit}>
      <S.Input type="email" name="email" placeholder="사용자 이메일" onChange={onChange} value={userInput.email} />
      <S.Input type="password" name="password" placeholder="비밀번호" onChange={onChange} value={userInput.password} />
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
