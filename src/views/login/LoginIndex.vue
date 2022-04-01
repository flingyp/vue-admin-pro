<template>
  <n-card class="box-page-center w-[45rem] shadow-xl shadow-gray-300">
    <div class="flex justify-between items-center mb-[4rem]">
      <SvgIcon name="logo-rocket" color="rgba(59, 130, 246, 1)" class="text-[6rem]" />
      <span style="color: rgba(59, 130, 246, 1)" class="text-[2.8rem] font-bold font-serif">Vue Admin Pro</span>
    </div>

    <n-form ref="formRef" :model="model" label-width="auto">
      <n-form-item path="age">
        <n-input v-model="model.age" size="large" placeholder="请输入用户名" />
      </n-form-item>
      <n-form-item path="password">
        <n-input
          v-model="model.password"
          type="password"
          size="large"
          placeholder="请输入密码"
          show-password-on="click"
        />
      </n-form-item>

      <n-form-item>
        <n-button type="primary" size="large" class="w-full" color="rgba(59, 130, 246, 1)"> 登录 </n-button>
      </n-form-item>
    </n-form>
  </n-card>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { NCard, NForm, NFormItem, NInput, NButton } from 'naive-ui'

import SvgIcon from '@/components/SvgIcon.vue'

const model = reactive({
  age: 0,
  password: ''
})
</script>

<style scoped>
.n-form-item {
  display: block;
}
</style>
