import { AxiosError } from 'axios'
import { useMutation } from 'react-query'
import { withdrawal } from '../apis/auth'
import { removeToken } from '../utils/userTokenCookie'
import { useNavigate } from 'react-router-dom'
import useStore from '../store'

export const useWithdrawel = () => {
  const navigate = useNavigate()
  const { resetSetting } = useStore()
  const signinSuccess = (data: any) => {
    removeToken()
    resetSetting()
    navigate('/login')
  }

  const { mutate, isError } = useMutation(withdrawal, {
    onSuccess: (data) => {
      signinSuccess(data)
    },
    onError: (err: AxiosError) => {
      console.log(err)
    },
  })

  return { mutate, isError }
}
