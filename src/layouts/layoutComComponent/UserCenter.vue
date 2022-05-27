<template>
  <div class="h-full">
    <n-popselect
      v-model:value="popselectValue"
      :options="popselectOptions"
      trigger="hover"
      @update:value="clickPopselect"
    >
      <div class="cursor-pointer header-item-base-style">
        <img src="@/assets/img/user-logo.png" class="w-[3rem] h-[3rem] rounded-[50%] mr-[1rem]" />
        <div class="align-baseline">{{ UserStoreModule.userInfo.nickname || '昵称' }}</div>
      </div>
    </n-popselect>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NPopselect } from 'naive-ui'
import { useRouter } from 'vue-router'

import { useSysStoreModule } from '@/store/modules/SysStoreModule'
import { useUserStoreModule } from '@/store/modules/UserStoreModule'
import { removeLocalKey } from '@/utils/common/HandleLocalStorageUtil'

const SysStoreModule = useSysStoreModule()
const UserStoreModule = useUserStoreModule()
const router = useRouter()

const popselectOptions = [
  {
    label: '退出系统',
    value: 'ExitSystem'
  }
]

const popselectValue = ref(null)

// 退出系统需要做的事情
const exitSystemFun = async () => {
  removeLocalKey('accessToken')
  removeLocalKey('tabMenu')
  // reset stores
  UserStoreModule.$reset()
  SysStoreModule.$reset()
}

const clickPopselect = async (value: string) => {
  if (value === 'ExitSystem') {
    await exitSystemFun()
    router.push({ name: 'Login' })
  }
}
</script>
