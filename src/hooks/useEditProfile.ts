import { UseMutateFunction, useMutation } from 'react-query'
import { AxiosError } from 'axios'

import { editProfile } from '../apis/auth'

interface FormData {
  img: string | File[]
  profile_message: string
  username: string
}
export const useEditProfile = (): UseMutateFunction<void, unknown, FormData, unknown> => {
  const { mutate } = useMutation((formData: FormData) => editProfile(formData), {
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (err: AxiosError) => {
      console.log(err)
    },
  })

  return mutate
}
