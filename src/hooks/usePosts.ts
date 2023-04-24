import React from 'react'
import { useQuery } from 'react-query'
import { getPosts } from '../apis/diary'
import { DiaryResponse } from '../types/diary'

interface UsePosts {
  posts: DiaryResponse[]
}

export const usePosts = (): UsePosts => {
  const fallback: DiaryResponse[] = []
  const { data: posts = fallback } = useQuery('posts', () => getPosts())

  return { posts }
}
