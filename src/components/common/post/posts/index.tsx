import React from 'react'
import * as S from './style'
import { NewPost } from '../../../../types'
import { Post } from '../post'

interface ConatinerPorps {
  posts: NewPost[]
  height: string
  type: boolean
}

export function Posts({ posts, height, type }: ConatinerPorps) {
  return (
    <S.Posts height={height}>
      {posts.map((arr, i) => {
        return <Post key={i} post={arr} type={type} />
      })}
    </S.Posts>
  )
}
