import axios, { AxiosRequestConfig } from 'axios'

const config: AxiosRequestConfig = { baseURL: 'http://localhost:3000' }
export const axiosInstance = axios.create(config)
