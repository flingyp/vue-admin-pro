<template>
  <div class="h-full">
    <n-popselect
      v-model:value="popselectValue"
      :options="popselectOptions"
      trigger="hover"
      @update:value="clickPopselect"
    >
      <div class="cursor-pointer header-item-base-style">
        <img
          src="https://p9-passport.byteacctimg.com/img/user-avatar/4dbf31fa6dec9c65b78a70d28d843c04~300x300.image"
          class="w-[3rem] h-[3rem] rounded-[50%] mr-[1rem]"
        />
        <div class="align-baseline">超级管理员</div>
      </div>
    </n-popselect>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NPopselect } from 'naive-ui'
import { useRouter } from 'vue-router'

import { useSysStore } from '@/store/modules/sysStore'
import { removeLocalKey } from '@/utils/common/handleLocalStorage'

const sysStore = useSysStore()
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
  sysStore.setTabMenuKeys([])
}

const clickPopselect = async (value: string) => {
  if (value === 'ExitSystem') {
    await exitSystemFun()
    router.push({ name: 'Login' })
  }
}
</script>
