import { UserProfile } from '../types/user'
import { axiosInstance } from './axios'
import { LoginProp, ProfileProp, RegisterProp, WithdrawelProp } from './type'

export const register = async (account: RegisterProp) => {
  const res = await axiosInstance({ multi: true }).post(`/auth/register`, account)
  return res.data
}

export const login = async (account: LoginProp) => {
  const res = await axiosInstance().post(`/auth/login`, account)
  console.log(res)
  return res.data
}

export const logout = async () => {
  const res = await axiosInstance().post(`/auth/logout`)
  console.log(res.data)
  return res.data
}

export const withdrawal = async () => {
  const res = await axiosInstance().delete(`/auth/withdrawal`)
  return res.data
}

export const refresh = async () => {
  const res = await axiosInstance().get(`/auth/refresh`)
  return res.data
}

export const verify = async () => {
  const res = await axiosInstance().get('/auth/verify')
  return res.data
}

export const getUser = async (userId: number) => {
  const res = await axiosInstance().get(`/auth/user/${userId}`)
  return res.data
}

export const getMyProfile = async () => {
  const res = await axiosInstance().get<UserProfile>(`/auth/user`)
  return res.data
}

export const searchUser = async (query: string) => {
  const res = await axiosInstance().get(`/auth/search/${query}`)
}

export const editProfile = async (profile: ProfileProp) => {
  const res = await axiosInstance({ multi: true }).put(`/auth/user`, profile)
  return res.data
}
