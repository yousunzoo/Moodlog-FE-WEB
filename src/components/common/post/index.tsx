import React from 'react'
import * as S from './style'
import { NewPost } from '../../../types'

interface ContainerProp {
  post: NewPost
  type: boolean
}

interface ConatinerPorps {
  posts: NewPost[]
  height: string
  type: boolean
}

function Post({ post, type }: ContainerProp) {
  const date = post.createdAt
  const month = date.split('-')
  const day = month[2].split('T')
  return (
    <S.DiaryPost>
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

export function Posts({ posts, height, type }: ConatinerPorps) {
  console.log(posts, height, type)
  return (
    <S.Posts height={height}>
      {posts.map((arr, i) => {
        return <Post key={i} post={arr} type={type} />
      })}
    </S.Posts>
  )
}
