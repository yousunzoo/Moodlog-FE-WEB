import { useQuery } from 'react-query'
import { getMyProfile } from '../apis/auth'
import { useEffect } from 'react'

export default function useUserData() {
  const { data, refetch } = useQuery(['user'], () => getMyProfile(), {
    staleTime: 60000 * 10,
    enabled: false,
  })

  const { data: own } = useQuery(
    'own',
    () =>
      getMyProfile().then((a) => {
        return a
      }),
    { staleTime: 1000, cacheTime: 100 * 40 },
  )

  return { data, refetch, own }
}
