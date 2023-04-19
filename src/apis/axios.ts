import axios, { AxiosRequestConfig } from 'axios'

const config: AxiosRequestConfig = {
  baseURL: 'http://localhost:3000',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImlhdCI6MTY4MTkwMzgxNCwiZXhwIjoxNjgxOTA3NDE0fQ.Ef1z1pvQhTeDVwS-mzzMBSwbU6jriA3dO0NGr8Bst8s`,
  },
}
export const axiosInstance = axios.create(config)
