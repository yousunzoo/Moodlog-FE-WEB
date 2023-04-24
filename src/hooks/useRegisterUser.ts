import { UseMutateFunction, useMutation } from 'react-query'
import { AxiosError } from 'axios'

import { register } from '../apis/auth'
import { useLoginUser } from './useLogin'

interface FormData {
  email: string
  password: string
  profile_image: File[]
  username: string
}

export const useRegisterUser = (): UseMutateFunction<void, unknown, FormData, unknown> => {
  const { signinSuccess } = useLoginUser()
  const { mutate } = useMutation((formData: FormData) => register(formData), {
    onSuccess: (data) => {
      signinSuccess(data)
    },
    onError: (err: AxiosError) => {
      console.log(err)
    },
  })

  return mutate
}
