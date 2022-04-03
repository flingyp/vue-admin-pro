<template>
  <div class="flex flex-col items-center justify-center w-full h-full">
    <svg-icon name="common-500" class="w-[35em] h-[35em]"></svg-icon>
    <n-button type="primary" class="w-[16rem] text-[1rem] mt-[1rem]" @click="callBackMain">回首页</n-button>
  </div>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui'
import { useRouter } from 'vue-router'

import svgIcon from '@/components/svgIcon.vue'

const router = useRouter()

const callBackMain = () => {
  router.push({ name: 'TestIndex' })
}
</script>

<style scoped></style>
