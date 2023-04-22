import { UseMutateFunction, useMutation, useQueryClient } from 'react-query'

import { register } from '../apis/auth'

interface FormData {
  email: string
  password: string
  profile_image: File[]
  username: string
}

export const useRegisterUser = (): UseMutateFunction<void, unknown, FormData, unknown> => {
  const { mutate } = useMutation((formData: FormData) => register(formData), {
    onSuccess: (data) => {
      setToken(data.accessToken, {
        path: '/',
        maxAge: data.content.exp - data.content.iat,
      })
      navigate('/')
    },
    onError: (err: AxiosError) => {
      console.log(err)
    },
  })

  return mutate
}
