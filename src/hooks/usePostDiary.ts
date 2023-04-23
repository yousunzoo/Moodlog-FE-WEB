import { AxiosError } from 'axios'
import { UseMutateFunction, useMutation } from 'react-query'
import { createPost } from '../apis/diary'
import { PostProp } from '../apis/type'
import { useNavigate } from 'react-router-dom'

export const usePostDiary = (): UseMutateFunction<void, unknown, PostProp, unknown> => {
  const navigate = useNavigate()

  const { mutate } = useMutation((post: PostProp) => createPost(post), {
    onSuccess: (data) => {
      navigate(`/diary/${data.id}`)
    },
    onError: (err: AxiosError) => {
      console.log(err)
    },
  })

  return mutate
}
