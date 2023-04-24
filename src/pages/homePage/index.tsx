import React from 'react'
import { TopbarWrapper } from '../../styles/common'
import Logo from '../../components/common/logo'
import * as S from './style'
import Nav from '../../components/common/Nav'
import { Posts } from '../../components/common/post/posts'
import { usePosts } from '../../hooks/usePosts'

function HomePage() {
  const { posts } = usePosts()
  return (
    <>
      <TopbarWrapper>
        <Logo size={120} />
        <S.IconWrapper>
          <S.FollwerIcon />
          <S.ShowDiaryIcon />
        </S.IconWrapper>
      </TopbarWrapper>
      <S.ContentWrapper>
        <Posts posts={posts} isShownUsername={true} />
      </S.ContentWrapper>
      <Nav />
    </>
  )
}

export default HomePage
