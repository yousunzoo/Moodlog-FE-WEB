import { useEffect } from 'react'
import { useQueryClient } from 'react-query'
import { Outlet, useNavigate } from 'react-router-dom'
import verifyToken from '../hooks/verifyToken'
import { getToken } from '../utils/userTokenCookie'

function ProtectedRouter() {
  const queryClient = useQueryClient()
  const isAuthenticated = verifyToken()
  const token = getToken()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated === 'FAILED') {
      queryClient.clear()
      alert('로그인해주세요')
      navigate('/login')
    }
  }, [isAuthenticated])
  if (!token && isAuthenticated !== 'SUCCESS') return <>Loading..</>
  return <Outlet />
}

export default ProtectedRouter
