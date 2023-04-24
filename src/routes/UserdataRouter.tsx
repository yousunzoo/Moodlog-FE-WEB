import { useQuery } from 'react-query'
import { getMyProfile } from '../apis/auth'
import { Outlet } from 'react-router-dom'
import useUserData from '../hooks/useUserData'
import { useEffect } from 'react'

function UserdataRouter() {
  const { refetch } = useUserData()

  useEffect(() => {
    refetch()
  }, [])

  return <Outlet />
}

export default UserdataRouter
