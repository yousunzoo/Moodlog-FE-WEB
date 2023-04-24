import { UseMutateFunction, useMutation } from 'react-query'
import { AxiosError } from 'axios'

import { editProfile } from '../apis/auth'

interface FormData {
  username: string
  profile_image: string
  profile_message: string
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
