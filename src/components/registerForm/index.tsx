import React from 'react'
import * as S from './style'
import Profile from '../common/profile'

function RegisterForm() {
  return (
    <>
      <S.InputWrpper>
        <S.Input type="text" placeholder="사용하실 이메일을 입력해주세요" />
        <S.Text>검증 메세지 출력</S.Text>
      </S.InputWrpper>
      <S.InputWrpper>
        <S.Input type="text" placeholder="사용하실 사용자명을 입력해주세요" />
        <S.Text>검증 메세지 출력</S.Text>
      </S.InputWrpper>
      <S.InputWrpper>
        <S.Input type="text" placeholder="사용하실 비밀번호를을 입력해주세요" />
        <S.Text>검증 메세지 출력</S.Text>
      </S.InputWrpper>
      <S.InputWrpper>
        <S.Input type="text" placeholder="비밀번호를 다시 한 번 입력해주세요" />
        <S.Text>검증 메세지 출력</S.Text>
      </S.InputWrpper>
      <div>
        <Profile />
      </div>
    </>
  )
}

export default RegisterForm
