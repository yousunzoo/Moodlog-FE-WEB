import React from 'react'
import * as S from './style'

function DiaryContainer() {
  return (
    <S.DiaryPost>
      <S.DiaryPostImage>
        <img src="/assets/icons/followers.png" width="100%" />
      </S.DiaryPostImage>
      <S.DiaryPostLetter>
        <S.DiaryPostLetterContain>오늘의 일기 블라블라블라블라 야호야호야호 코딩코딩코딩....</S.DiaryPostLetterContain>
      </S.DiaryPostLetter>
      <S.DiaryPostDate>
        <S.DiaryPostDateContain>
          04
          <br />
          17
        </S.DiaryPostDateContain>
      </S.DiaryPostDate>
    </S.DiaryPost>
  )
}

function Diary() {
  return (
    <>
      <DiaryContainer />
      <DiaryContainer />
      <DiaryContainer />
    </>
  )
}

export default Diary
