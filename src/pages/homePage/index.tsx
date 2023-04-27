import React, { useState } from 'react'
import { TopbarWrapper } from '../../styles/common'
import Logo from '../../components/common/logo'
import * as S from './style'
import Nav from '../../components/common/Nav'
import { Posts } from '../../components/common/post/posts'
import { usePosts } from '../../hooks/usePosts'
import useUserData from '../../hooks/useUserData'
import { HiOutlineUsers } from 'react-icons/hi'
import { BsBookmarkHeart } from 'react-icons/bs'
type FilterOption = 'ALL' | 'FOLLOWER' | 'LIKES'

function HomePage() {
  const { data: user } = useUserData()
  const [postFilter, setPostFilter] = useState<FilterOption>('ALL')
  const { posts } = usePosts()

  const filteredPosts = () => {
    if (!user) return

    const sortedPosts = posts.sort((a, b) => {
      if (a.id > b.id) {
        return -1
      } else {
        return 1
      }
    })

    const following = user?.following
    const likes = user?.likes

    if (postFilter === 'FOLLOWER') {
      return sortedPosts.filter((post) =>
        following?.some((follow) => Number(follow.follower.id) === Number(post.user?.id)),
      )
    } else if (postFilter === 'LIKES') {
      return sortedPosts.filter((post) => likes?.some((like) => Number(like.post.id) === Number(post.id)))
    } else {
      return sortedPosts
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
          <S.FollwerIcon onClick={() => changeFilterOption('FOLLOWER')}>
            <HiOutlineUsers />
          </S.FollwerIcon>
          <S.ShowDiaryIcon onClick={() => changeFilterOption('LIKES')}>
            <BsBookmarkHeart />
          </S.ShowDiaryIcon>
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
