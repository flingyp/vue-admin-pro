<template>
  <div class="mb-[2rem]">
    <n-divider dashed>{{ title }}</n-divider>
    <div class="flex items-center flex-wrap">
      <slot>默认内容</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NDivider } from 'naive-ui'

interface IBasicItemBox {
  title: string
}

withDefaults(defineProps<IBasicItemBox>(), {
  title: '默认标题'
})
</script>
