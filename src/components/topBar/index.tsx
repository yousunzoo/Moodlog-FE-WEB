import React from 'react'
import * as S from './style'
import { TopbarProps } from '../../types/createDiary'
import { MdClose } from 'react-icons/md'
import { HiOutlineArrowLeft } from 'react-icons/hi'

function TopBar({ step, changeStep }: TopbarProps) {
  if (step === 'first') {
    return (
      <>
        <S.Wrapper onClick={changeStep}>
          <S.Title>그리기</S.Title>
          <S.CloseBtn>
            취소
            <MdClose data-step="cancel" />
          </S.CloseBtn>
          <S.Btn data-step="next">다음</S.Btn>
        </S.Wrapper>
      </>
    )
  }
  return (
    <>
      <S.Wrapper onClick={changeStep}>
        <S.Title>일기 작성</S.Title>
        <S.PrevBtn>
          이전
          <HiOutlineArrowLeft data-step="prev" />
        </S.PrevBtn>
        <S.Btn data-step="submit">완료</S.Btn>
      </S.Wrapper>
    </>
  )
}

export default TopBar
