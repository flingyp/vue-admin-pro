<template>
  <div class="w-full h-[75rem] p-[3rem]">
    <RichTextCom v-model:content="richTextContent"></RichTextCom>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import RichTextCom from '@/components/RichTextCom.vue'

const richTextContent = ref('')
</script>

<style scoped></style>
