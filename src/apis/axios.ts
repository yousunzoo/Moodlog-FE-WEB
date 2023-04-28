import axios, { AxiosRequestConfig, AxiosError } from 'axios'
import { getToken } from '../utils/userTokenCookie'

const getAxiosInstance = (option?: { multi?: boolean }) => {
  const config: AxiosRequestConfig = {
    baseURL: 'http://moodlog-env.eba-a73kg2hr.ap-northeast-2.elasticbeanstalk.com/',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    withCredentials: true,
  }

  const instance = axios.create(config)

  instance.interceptors.request.use(
    (request) => {
      const token = getToken()
      if (token) request.headers['Authorization'] = `Bearer ${token}`
      if (option && option.multi) request.headers['Content-Type'] = 'multipart/form-data'
      return request
    },
    (error: AxiosError) => {
      console.log(error)
      return Promise.reject(error)
    },
  )

  return instance
}

export const axiosInstance = getAxiosInstance
