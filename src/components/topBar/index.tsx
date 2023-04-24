import React from 'react'
import * as S from './style'
import { TopbarProps } from '../../types/createDiary'

function TopBar({ step, changeStep }: TopbarProps) {
  if (step === 'first') {
    return (
      <>
        <S.Wrapper onClick={changeStep}>
          <S.Title>그리기</S.Title>
          <S.CloseBtn data-step="cancel">취소</S.CloseBtn>
          <S.Btn data-step="next">다음</S.Btn>
        </S.Wrapper>
      </>
    )
  }
  return (
    <>
      <S.Wrapper onClick={changeStep}>
        <S.Title>일기 작성</S.Title>
        <S.PrevBtn data-step="prev">이전</S.PrevBtn>
        <S.Btn data-step="submit">완료</S.Btn>
      </S.Wrapper>
    </>
  )
}

export default TopBar
