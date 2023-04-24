import React from 'react'
import * as S from './style'
import { DiaryResponse } from '../../../../types/diary'

interface ContainerProp {
  post: DiaryResponse
  isShownUsername: boolean
}

export function Post({ post, isShownUsername }: ContainerProp) {
  const month = post.createdAt.split('-')
  const day = month[2].split('T')
  return (
    <S.DiaryPost to={`/diary/${post.id}`}>
      <S.DiaryPostImage>
        <img src={post.img} width="100%" />
      </S.DiaryPostImage>
      <S.DiaryPostLetter>
        {isShownUsername ? (
          <S.DiaryPostLetterContain>
            <S.UsernameText>{post.user.username}</S.UsernameText>
            <S.PostBodyWrapper>{post.body}</S.PostBodyWrapper>
          </S.DiaryPostLetterContain>
        ) : (
          <S.DiaryPostLetterContain>
            <S.PostBodyWrapper>{post.body}</S.PostBodyWrapper>
          </S.DiaryPostLetterContain>
        )}
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
