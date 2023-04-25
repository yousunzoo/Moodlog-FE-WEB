import { useQuery } from 'react-query'
import { getMyProfile } from '../apis/auth'
import { useEffect } from 'react'

export default function useUserData() {
  const { data, refetch } = useQuery(['user'], () => getMyProfile(), {
    staleTime: 60000 * 10,
    enabled: false,
  })

  return { data, refetch }
}
