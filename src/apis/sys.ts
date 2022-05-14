import { SysTyping } from '@/typings/Sys'
import { getLocalKey } from '@/utils/common/handleLocalStorage'
import { ajaxRequest } from '@/utils/request'

/**
 * 获取该用户路由
 * @returns
 */
export const getSysRouters = async () => {
  const loginData = await ajaxRequest<SysTyping.RouteStruct[]>({
    url: '/sys/getRouters',
    method: 'post',
    headers: {
      accessToken: getLocalKey('accessToken') || ''
    }
  })
  return loginData
}
