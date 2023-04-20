import { setToken } from '../utils/userToken'
import { axiosInstance } from './axios'
import { LoginProp, ProfileProp, RegisterProp } from './type'

export const register = async (account: RegisterProp) => {
  const res = await axiosInstance.post(`/auth/register`, account)
  console.log(res.data)
  return res.data
}

export const login = async (account: LoginProp) => {
  const res = await axiosInstance.post(`/auth/login`, account)
  console.log(res.data)
  setToken(res.data.accessToken)
  return res.data
}

export const logout = async () => {
  const res = await axiosInstance.delete(`/auth/logout`)
  console.log(res.data)
  return res.data
}

export const withdrawal = async () => {
  const res = await axiosInstance.delete(`/auth/withdrawal`)
  console.log(res.data)
  return res.data
}

export const getUser = async (userId: number) => {
  const res = await axiosInstance.get(`/auth/user/${userId}`)
  console.log(res.data)
  return res.data
}

export const editProfile = async (profile: ProfileProp) => {
  const res = await axiosInstance.put(`/auth/user`, profile)
  console.log(res.data)
  return res.data
}
