import { AxiosError } from 'axios'
import { UseMutateFunction, useMutation } from 'react-query'
import { updatePost } from '../apis/diary'
import { EditProp } from '../apis/type'
import { useNavigate } from 'react-router-dom'

export const useUpdateDiary = (): UseMutateFunction<any, AxiosError<unknown, any>, EditProp, unknown> => {
  const navigate = useNavigate()

  const { mutate } = useMutation(updatePost, {
    onSuccess: (data, variables) => {
      console.log(data)
      navigate(`/diary/${variables.postId}`)
    },
    onError: (err: AxiosError) => {
      console.log(err)
    },
  })

  return mutate
}
