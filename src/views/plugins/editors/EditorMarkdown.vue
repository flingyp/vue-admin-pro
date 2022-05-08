<template>
  <MarkdownComVue v-model:content="markdownContent"></MarkdownComVue>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import MarkdownComVue from '@/components/MarkdownCom.vue'

const markdownContent = ref('<h1 align="center">Vditor编辑器</h1>\n\n# Vue Admin Pro\n')
</script>
