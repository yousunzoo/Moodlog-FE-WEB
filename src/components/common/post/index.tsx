import React from 'react'
import * as S from './style'
import { NewPost } from '../../../types'

interface ContainerProp {
  arr: NewPost
}

function Post({ arr }: ContainerProp) {
  const date = arr.createdAt
  const month = date.split('-')
  const day = month[2].split('T')
  return (
    <S.DiaryPost>
      <S.DiaryPostImage>
        <img src={arr.img} width="100%" />
      </S.DiaryPostImage>
      <S.DiaryPostLetter>
        <S.DiaryPostLetterContain>{arr.body}</S.DiaryPostLetterContain>
      </S.DiaryPostLetter>
      <S.DiaryPostDate>
        <S.DiaryPostDateContain>
          {month[1]}
          <br />
          {day[0]}
        </S.DiaryPostDateContain>
      </S.DiaryPostDate>
    </S.DiaryPost>
  )
}

export default Post
