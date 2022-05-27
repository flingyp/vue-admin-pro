import { getLocalKey } from '@/utils/common/HandleLocalStorage'
import { ajaxRequest } from '@/utils/Request'

export const userLogin = async (username: string, password: string) => {
  const loginData = await ajaxRequest<UserTyping.ILoginRes>({
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
  const userInfo = await ajaxRequest<UserTyping.IUserInfo>({
    url: '/sys/userInfo',
    method: 'post',
    headers: {
      accessToken: getLocalKey('accessToken') || ''
    }
  })
  return userInfo
}
