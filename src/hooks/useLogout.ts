import { AxiosError } from 'axios'
import { useMutation, useQueryClient } from 'react-query'

import { logout } from '../apis/auth'
import { removeToken } from '../utils/userTokenCookie'
import { useNavigate } from 'react-router-dom'

export const useLogout = () => {
  const navigate = useNavigate()

  const { mutate, isError } = useMutation(() => logout(), {
    onSuccess: () => {
      removeToken()
      navigate('/login')
    },
    onError: (err: AxiosError) => {
      console.log(err)
    },
  })

  return { mutate, isError }
}
