import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'

import { successData, failData } from '../_utils'

const MockRandom = Mock.Random

/**
 * 用户登录
 * @param username
 * @param password
 * @returns
 */
const SysUserLogin = (username: string, password: string) => {
  if (username === 'admin' && password === '123456') {
    return successData('admin-token')
  }
  if (username === 'user' && password === '123456') {
    return successData('user-token')
  }
  return failData('用户名或密码错误')
}

const SysUserInfo = (token: string) => {
  // 超级管理员
  if (token === 'admin-token') {
    return successData({
      id: MockRandom.id(),
      username: 'admin',
      nickname: '超级管理员',
      birthday: MockRandom.date(),
      roles: ['admin'],
      permissions: ['sys:root:*']
    })
  }
  if (token === 'user-token') {
    return successData({
      id: MockRandom.id(),
      username: 'user',
      nickname: '普通用户',
      birthday: MockRandom.date(),
      roles: ['user'],
      permissions: ['sys:user:*']
    })
  }
  return failData('token错误')
}

export default [
  {
    url: '/dev/sys/login',
    method: 'post',
    response: ({ body }) => {
      return SysUserLogin(body.username, body.password)
    }
  },
  {
    url: '/dev/sys/userInfo',
    method: 'post',
    response: ({ headers }) => {
      return SysUserInfo(headers.accesstoken)
    }
  }
] as MockMethod[]
