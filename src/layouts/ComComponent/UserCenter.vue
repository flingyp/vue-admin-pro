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
        <div class="align-baseline">{{ userStore.userInfo.nickname || '昵称' }}</div>
      </div>
    </n-popselect>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NPopselect } from 'naive-ui'
import { useRouter } from 'vue-router'

import { useSysStore } from '@/store/modules/SysStore'
import { useUserStore } from '@/store/modules/UserStore'
import { removeLocalKey } from '@/utils/common/HandleLocalStorage'

const sysStore = useSysStore()
const userStore = useUserStore()
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
  userStore.$reset()
  sysStore.$reset()
}

const clickPopselect = async (value: string) => {
  if (value === 'ExitSystem') {
    await exitSystemFun()
    router.push({ name: 'Login' })
  }
}
</script>
