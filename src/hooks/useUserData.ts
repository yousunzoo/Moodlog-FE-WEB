import { useQuery } from 'react-query'
import { getMyProfile } from '../apis/auth'

export default function useUserData() {
  const { data, refetch } = useQuery(['user'], () => getMyProfile(), {
    staleTime: 60000 * 10,
    enabled: false,
  })

  return { data, refetch }
}
