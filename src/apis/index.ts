import { AxiosRequestConfig } from 'axios'
import $ajax from '@/utils/request'

/**
 * 统一返回的响应数据格式
 */
interface IResponseDataStruct<T> {
  code: number
  msg: string
  data: T
}

/**
 * 封装统一响应格式，apis下的所有模块都基于此方法去发送请求
 * @param config
 * @returns
 */
export default async function baseAjaxConfig<K>(config: AxiosRequestConfig) {
  const data = await $ajax.request<K, IResponseDataStruct<K>>(config)
  return data
}
