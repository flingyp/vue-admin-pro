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
import { removeLocalKey } from '@/utils/common/handleLocalStorage'

const router = useRouter()

const popselectOptions = [
  {
    label: '退出系统',
    value: 'ExitSystem'
  }
]

const popselectValue = ref(null)

const clickPopselect = (value: string) => {
  // 退出系统
  if (value === 'ExitSystem') {
    removeLocalKey('accessToken')
    router.push({ name: 'Login' })
  }
}
</script>
