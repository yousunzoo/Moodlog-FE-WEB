import React from 'react'
import { Post } from '../post'
import { DiaryResponse } from '../../../../types/diary'
import * as S from './style'

interface ConatinerPorps {
  posts: DiaryResponse[]
  isShownUsername: boolean
}

export function Posts({ posts, isShownUsername }: ConatinerPorps) {
  if (posts.length === 0) return <S.NoPosts>아직 작성한 다이어리가 없습니다.</S.NoPosts>
  return (
    <>
      {posts.map((post) => {
        return <Post key={post.id} post={post} isShownUsername={isShownUsername} />
      })}
    </>
  )
}
