import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import Alert from '../components/common/alert'
import { usePosts } from '../hooks/usePosts'

function DiaryCreateProtected() {
  const [isTodayCreatedPost, setIsTodayCreatedPost] = useState(false)
  const navigate = useNavigate()

  const { posts } = usePosts()

  useEffect(() => {
    if (posts.length > 0) {
      todayCreatedPost()
    }
  }, [isTodayCreatedPost, posts])

  const todayCreatedPost = () => {
    console.log(posts)
    const today = new Date()
    const sortedPosts = posts.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
    setIsTodayCreatedPost(today.getDate() === Number(sortedPosts[0].createdAt.slice(8, 10)))
  }

  return (
    <>
      <Alert
        isOpen={isTodayCreatedPost}
        onClose={() => navigate('/')}
        message="오늘은 더 이상 글을 작성할 수 없습니다."
      />
      <Outlet />
    </>
  )
}

export default DiaryCreateProtected
