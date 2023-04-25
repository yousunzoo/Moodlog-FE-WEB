import { UseMutateFunction, useMutation } from 'react-query'
import { AxiosError } from 'axios'

import { editProfile } from '../apis/auth'
import { ProfileProp } from '../apis/type'

export const useEditProfile = (): UseMutateFunction<void, unknown, ProfileProp, unknown> => {
  const { mutate } = useMutation(editProfile, {
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (err: AxiosError) => {
      console.log(err)
    },
  })

  return mutate
}
