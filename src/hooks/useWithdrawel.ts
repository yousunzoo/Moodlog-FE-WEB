import { AxiosError } from 'axios'
import { useMutation, useQueryClient } from 'react-query'

import { withdrawal } from '../apis/auth'

import { WithdrawelProp } from '../apis/type'
import { removeToken } from '../utils/userTokenCookie'
import { useNavigate } from 'react-router-dom'

export const useWithdrawel = () => {
  const navigate = useNavigate()

  const signinSuccess = (data: any) => {
    removeToken()
    navigate('/login')
  }

  const { mutate, isError } = useMutation(() => withdrawal(), {
    onSuccess: (data) => {
      signinSuccess(data)
    },
    onError: (err: AxiosError) => {
      console.log(err)
    },
  })

  return { mutate, isError }
}
