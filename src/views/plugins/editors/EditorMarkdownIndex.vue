<template>
  <div class="w-full h-[80rem] p-[3rem]">
    <MdEditorV3Com v-model:text="markdownText"></MdEditorV3Com>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import MdEditorV3Com from '@/components/MdEditorV3Com.vue'

const markdownText = ref('# Markdown编辑器 \n\n- [md-editor-v3官方文档](https://imzbf.github.io/md-editor-v3/docs)\n\n')
</script>

<style scoped></style>
