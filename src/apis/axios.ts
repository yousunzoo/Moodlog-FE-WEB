import axios, { AxiosRequestConfig } from 'axios'
import { getToken } from './../utils/userToken'

const config: AxiosRequestConfig = {
  baseURL: 'http://localhost:3000',
  headers: {
    Authorization: `Bearer ${getToken()}`,
    'Content-Type': 'multipart/form-data',
  },
}
export const axiosInstance = axios.create(config)
