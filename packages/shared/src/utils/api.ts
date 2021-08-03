import axios, { AxiosInstance } from 'axios'

const API: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

API.interceptors.request.use(
  async (axiosConfig) => {
    return axiosConfig
  },
  (error) => Promise.reject(error),
)

API.interceptors.response.use(
  async (response) => {
    return response
  },
  (error) => Promise.reject(error),
)

export { API }
