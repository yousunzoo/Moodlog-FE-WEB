import { axiosInstance } from './axios'

interface Login {
  email: string
  password: string
}

export const login = async (account: Login) => {
  const res = await axiosInstance.post(`/auth/login`, account)
  console.log(res)
  return res.data
}
