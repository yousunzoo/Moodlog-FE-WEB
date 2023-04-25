import { AxiosError } from 'axios'
import { UseMutateFunction, useMutation } from 'react-query'
import { createPost } from '../apis/diary'
import { PostProp } from '../apis/type'
import { useNavigate } from 'react-router-dom'
import useUserData from './useUserData'

export const usePostDiary = (): UseMutateFunction<void, unknown, PostProp, unknown> => {
  const navigate = useNavigate()
  const { refetch } = useUserData()

  const { mutate } = useMutation(createPost, {
    onSuccess: (data) => {
      refetch()
      navigate(`/diary/${data.id}`)
    },
    onError: (err: AxiosError) => {
      console.log(err)
    },
  })

  return mutate
}
