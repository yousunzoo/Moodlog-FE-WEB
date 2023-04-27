import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import Alert from '../components/common/alert'

import useUserData from '../hooks/useUserData'

function DiaryCreateProtected() {
  const [isTodayCreatedPost, setIsTodayCreatedPost] = useState(false)
  const navigate = useNavigate()

  const { data: user } = useUserData()

  useEffect(() => {
    if (!user) return
    if (user.post.length > 0) {
      todayCreatedPost()
    }
  }, [isTodayCreatedPost, user?.post])

  const todayCreatedPost = () => {
    const today = new Date()
    const sortedPosts = user?.post.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
    setIsTodayCreatedPost(today.getDate() === Number(sortedPosts?.[0].createdAt.slice(8, 10)))
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
