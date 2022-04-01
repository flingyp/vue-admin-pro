import { getLocalKey } from '@/utils/common/handleLocalStorage'
import baseAjaxConfig from '../index'

export const userLogin = async (username: string, password: string) => {
  const loginData = await baseAjaxConfig({
    url: '/sys/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
  return loginData
}

export const getUserInfoService = async () => {
  const userInfo = await baseAjaxConfig<UserTyping.IUserInfo>({
    url: '/sys/userInfo',
    method: 'post',
    headers: {
      accessToken: getLocalKey('accessToken') || ''
    }
  })
  return userInfo
}
