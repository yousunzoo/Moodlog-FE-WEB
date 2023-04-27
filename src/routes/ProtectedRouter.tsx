import { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'
import { Outlet, useNavigate } from 'react-router-dom'
import verifyToken from '../hooks/verifyToken'
import { getToken } from '../utils/userTokenCookie'
import Alert from '../components/common/alert'

function ProtectedRouter() {
  const [isOpen, setIsOpen] = useState(false)

  const queryClient = useQueryClient()
  const isAuthenticated = verifyToken()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated === 'FAILED') {
      queryClient.clear()
      setIsOpen(true)
    }
  }, [isAuthenticated, isOpen])
  // if (!token && isAuthenticated !== 'SUCCESS') return <>Loading..</>
  return (
    <>
      <Alert isOpen={isOpen} onClose={() => navigate('/login')} message="로그인 해주세요" />
      <Outlet />
    </>
  )
}

export default ProtectedRouter
