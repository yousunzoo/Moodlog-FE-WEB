import React from 'react'
import { Post } from '../post'
import { DiaryResponse } from '../../../../types/diary'

interface ConatinerPorps {
  posts: DiaryResponse[]
  isShownUsername: boolean
}

export function Posts({ posts, isShownUsername }: ConatinerPorps) {
  return (
    <>
      {posts.map((post) => {
        return <Post key={post.id} post={post} isShownUsername={isShownUsername} />
      })}
    </>
  )
}
