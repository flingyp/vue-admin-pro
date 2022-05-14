<template>
  <div class="flex-center flex-col h-[calc(100vh-10.4rem)]">
    <!-- SVG图标 -->
    <div class="w-[50rem] h-[50rem] text-primary">
      <component :is="TypeComponent"></component>
    </div>

    <!-- 回首页的按钮 -->
    <n-button type="primary" size="medium" class="px-[10rem] mt-[4rem] !text-[#fff]" @click="GoBackAbout"
      >回关于</n-button
    >
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Component } from 'vue'
import { NButton } from 'naive-ui'
import { useRouter } from 'vue-router'

import SvgNotFound from './SvgNotFound.vue'
import SvgServerExcept from './SvgServerExcept.vue'

const router = useRouter()

type ExceptPageType = '404' | '500'

interface BaseExceptProps {
  type: ExceptPageType
}

const props = defineProps<BaseExceptProps>()

const TypeComponent = computed<Component | undefined>(() => {
  if (props.type === '404') {
    return SvgNotFound
  }

  if (props.type === '500') {
    return SvgServerExcept
  }
  return undefined
})

const GoBackAbout = () => {
  router.push({ name: 'AboutIndex' })
}
</script>
