import React from 'react'
import * as S from './style'
function TopBar() {
  return (
    <div>
      <S.Wrapper>
        <S.Title>그리기</S.Title>
        <S.CloseBtn>
          취소
          <img src="/assets/icons/close.png" />
        </S.CloseBtn>
        <S.Btn>다음</S.Btn>
      </S.Wrapper>
    </div>
  )
}

export default TopBar
