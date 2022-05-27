import { defineStore } from 'pinia'

import { getLocalKey } from '@/utils/common/HandleLocalStorage'
import { getUserInfoService } from '@/apis/UserApi'

interface IUserStoreModuleState {
  token: string
  userInfo: UserTyping.IUserInfo
}

export const useUserStoreModule = defineStore('UserStoreModule', {
  state: () => {
    const UserStoreModuleState: IUserStoreModuleState = {
      token: getLocalKey('accessToken') || '',
      userInfo: {}
    }
    return UserStoreModuleState
  },
  getters: {
    getPermissions: (state) => state.userInfo.permissions
  },
  actions: {
    // 获取用户信息
    async getUserInfo() {
      const infoData = await getUserInfoService()
      if (infoData.code === 200) {
        this.userInfo = infoData.data
      }
    }
  }
})
