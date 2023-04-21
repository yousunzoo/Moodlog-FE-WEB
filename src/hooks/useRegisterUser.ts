import { UseMutateFunction, useMutation, useQueryClient } from 'react-query'
import { useCookies } from 'react-cookie'

import axios from 'axios'
import { axiosInstance } from '../apis/axios'
import { register } from '../apis/auth'
import { getToken } from '../utils/userTokenCookie'

interface FormData {
  email: string
  password: string
  profile_image: File[]
  username: string
}

export const useRegisterUser = (): UseMutateFunction<void, unknown, FormData, unknown> => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation((formData: FormData) => register(formData), {})

  return mutate
}
