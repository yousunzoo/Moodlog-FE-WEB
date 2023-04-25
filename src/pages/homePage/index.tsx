import React, { useState } from 'react'
import { TopbarWrapper } from '../../styles/common'
import Logo from '../../components/common/logo'
import * as S from './style'
import Nav from '../../components/common/Nav'
import { Posts } from '../../components/common/post/posts'
import { usePosts } from '../../hooks/usePosts'
import useUserData from '../../hooks/useUserData'

type FilterOption = 'ALL' | 'FOLLOWER' | 'LIKES'

function HomePage() {
  const { data: user } = useUserData()
  const [postFilter, setPostFilter] = useState<FilterOption>('ALL')
  const { posts } = usePosts()

  const filteredPosts = () => {
    if (!user) return

    const following = user?.following
    const likes = user?.likes

    if (postFilter === 'FOLLOWER') {
      return posts.filter((post) => following?.some((follow) => Number(follow.follower.id) === Number(post.user.id)))
    } else if (postFilter === 'LIKES') {
      return posts.filter((post) => likes?.some((like) => Number(like.post.id) === Number(post.id)))
    } else {
      return posts
    }
  }

  const changeFilterOption = (option: FilterOption) => {
    if (postFilter === option) {
      return setPostFilter('ALL')
    }
    setPostFilter(option)
  }

  return (
    <>
      <TopbarWrapper>
        <Logo size={120} isCenter={false} />
        <S.IconWrapper>
          <S.FollwerIcon onClick={() => changeFilterOption('FOLLOWER')} />
          <S.ShowDiaryIcon onClick={() => changeFilterOption('LIKES')} />
        </S.IconWrapper>
      </TopbarWrapper>
      <S.ContentWrapper>
        <Posts posts={filteredPosts() || posts} isShownUsername={true} />
      </S.ContentWrapper>
      <Nav />
    </>
  )
}

export default HomePage
