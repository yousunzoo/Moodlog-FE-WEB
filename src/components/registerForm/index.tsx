import React, { useState } from 'react'
import * as S from './style'
import Profile from '../common/profile'
import { axiosInstance } from '../../apis/axios'
import { NewUser } from '../../types/'

function RegisterForm() {
  const [user, setUser] = useState()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const userObj = {
      email: 'test1@test.com',
      password: '12341234',
      username: 'test1',
      profile_image: '../../public/assets/icons/close.png',
    }
    const res = await axiosInstance.post('/auth/register', { data: userObj })
    console.log(res)
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.InputWrapper>
        <S.Input type="text" placeholder="사용하실 이메일을 입력해주세요" />
        <S.Text>검증 메세지 출력</S.Text>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Input type="text" placeholder="사용하실 사용자명을 입력해주세요" />
        <S.Text>검증 메세지 출력</S.Text>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Input type="text" placeholder="사용하실 비밀번호를을 입력해주세요" />
        <S.Text>검증 메세지 출력</S.Text>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Input type="text" placeholder="비밀번호를 다시 한 번 입력해주세요" />
        <S.Text>검증 메세지 출력</S.Text>
      </S.InputWrapper>
      <S.ProfileContainer>
        <Profile />
        <S.ProfileTextContainer>
          <button>프로필 이미지 등록</button>
          <div>파일이름</div>
        </S.ProfileTextContainer>
      </S.ProfileContainer>
      <S.ResigterButton type="submit">회원가입</S.ResigterButton>
    </S.Form>
  )
}

export default RegisterForm
