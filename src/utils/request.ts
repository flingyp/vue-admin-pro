import axios, { AxiosRequestConfig } from 'axios'

interface IResponseData<T> {
  code: number
  msg: string
  data: T
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  withCredentials: false
})

/**
 * 请求拦截器
 */
axiosInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/**
 * 响应拦截器
 */
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance

export const ajaxRequest = async <T>(config: AxiosRequestConfig): Promise<IResponseData<T>> => {
  const responseData = await axiosInstance.request<any, IResponseData<T>>(config)
  return responseData
}
