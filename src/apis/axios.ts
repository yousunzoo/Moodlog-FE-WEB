import axios, { AxiosRequestConfig } from 'axios'

const config: AxiosRequestConfig = {
  baseURL: 'http://localhost:3000',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImlhdCI6MTY4MTkwNzk1MSwiZXhwIjoxNjgxOTExNTUxfQ.2BPowmUHZqp1dgcM8PVTKA6bl86Vi_vjbSRjY0niLrY`,
  },
}
export const axiosInstance = axios.create(config)
