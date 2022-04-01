import axios from 'axios'

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
    console.log('请求拦截器', config)
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
    console.log('响应拦截器', response)
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance
