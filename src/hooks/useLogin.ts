import { AxiosError } from 'axios'
import { UseMutateFunction, useMutation, useQueryClient } from 'react-query'

import { register } from '../apis/auth'

import { login } from '../apis/auth'

import { LoginProp } from '../apis/type'
import { setToken } from '../utils/userTokenCookie'
import { useNavigate } from 'react-router-dom'

export const useLoginUser = (): UseMutateFunction<void, unknown, LoginProp, unknown> => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { mutate } = useMutation((user: LoginProp) => login(user), {
    onSuccess: (data) => {
      setToken(data.accessToken, {
        path: '/',
        maxAge: data.content.exp - data.content.iat,
      })
      navigate('/home')
    },
    onError: (err: AxiosError) => {
      console.log(err)
    },
  })

  return mutate
}
