import { defineStore } from 'pinia'

import { getLocalKey } from '@/utils/common/handleLocalStorage'
import { getUserInfoService } from '@/apis/modules/user'

interface IUserStoreState {
  token: string
  userInfo: UserTyping.IUserInfo
}

export const useUserStore = defineStore('userStore', {
  state: () => {
    const userStoreState: IUserStoreState = {
      token: getLocalKey('accessToken') || '',
      userInfo: {}
    }
    return userStoreState
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
