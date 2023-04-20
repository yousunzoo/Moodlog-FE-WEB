import { UseMutateFunction, useMutation, useQueryClient } from 'react-query'
import axios from 'axios'

interface FormData {
  email: string
  password: string
  profile_image: File[]
  username: string
}

const registerUser = async (formData: FormData): Promise<void> => {
  await axios({
    url: `http://localhost:3000/auth/register`,
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: formData,
  })
}

export const useRegisterUser = (): UseMutateFunction<void, unknown, FormData, unknown> => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation((formData: FormData) => registerUser(formData))

  return mutate
}
