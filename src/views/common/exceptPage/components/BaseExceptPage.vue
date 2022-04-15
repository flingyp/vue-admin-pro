<template>
  <div class="flex-center flex-col h-[calc(100%-6.4rem)]">
    <!-- SVG图标 -->
    <div class="w-[50rem] h-[50rem] text-primary">
      <component :is="TypeComponent"></component>
    </div>

    <!-- 回首页的按钮 -->
    <n-button type="primary" size="medium" class="px-[5rem] mt-[4rem]">回首页</n-button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Component } from 'vue'
import { NButton } from 'naive-ui'

import SvgNotFound from './SvgNotFound.vue'
import SvgServerExcept from './SvgServerExcept.vue'

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
</script>
