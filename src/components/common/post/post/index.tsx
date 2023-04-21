import React from 'react'
import * as S from './style'
import { NewPost } from '../../../../types'

interface ContainerProp {
  post: NewPost
  type: boolean
}

export function Post({ post, type }: ContainerProp) {
  const date = post.createdAt
  const month = date.split('-')
  const day = month[2].split('T')
  return (
    <S.DiaryPost to={`/diary/${post.id}`}>
      <S.DiaryPostImage>
        <img src={post.img} width="100%" />
      </S.DiaryPostImage>
      <S.DiaryPostLetter>
        {type ? <></> : <S.DiaryPostLetterContain>{post.body}</S.DiaryPostLetterContain>}
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
