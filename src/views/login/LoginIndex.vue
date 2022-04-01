<template>
  <n-card class="box-page-center w-[45rem] shadow-xl shadow-gray-300">
    <div class="flex justify-between items-center mb-[4rem]">
      <SvgIcon name="logo-rocket" color="rgba(59, 130, 246, 1)" class="text-[6rem]" />
      <span style="color: rgba(59, 130, 246, 1)" class="text-[2.8rem] font-bold font-serif">Vue Admin Pro</span>
    </div>

    <n-form ref="formRef" :model="loginForm" label-width="auto" :rules="rules">
      <n-form-item path="username">
        <n-input v-model:value="loginForm.username" size="large" placeholder="请输入用户名" />
      </n-form-item>
      <n-form-item path="password">
        <n-input
          v-model:value="loginForm.password"
          type="password"
          size="large"
          placeholder="请输入密码"
          show-password-on="click"
        />
      </n-form-item>

      <n-form-item>
        <n-button type="primary" size="large" class="w-full" color="rgba(59, 130, 246, 1)" @click="handlerUserLogin">
          登录
        </n-button>
      </n-form-item>
    </n-form>
  </n-card>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { NCard, NForm, NFormItem, NInput, NButton, FormRules, FormInst, useNotification } from 'naive-ui'

import { useRouter } from 'vue-router'

import SvgIcon from '@/components/svgIcon.vue'

import { userLogin } from '@/apis/modules/user'

import { setLocalKey } from '@/utils/common/handleLocalStorage'

const router = useRouter()

const loginForm = reactive({
  username: 'admin',
  password: '123456'
})

const rules: FormRules = {
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: ['input', 'blur']
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: ['blur']
    }
  ]
}

const formRef = ref<FormInst | null>(null)
// 点击登录
const notification = useNotification()
const handlerUserLogin = () => {
  // 验证
  formRef.value?.validate(async (errors) => {
    if (errors) return

    const loginResData = await userLogin(loginForm.username, loginForm.password)

    if (loginResData.code === 200) {
      setLocalKey('accessToken', loginResData.data)
      router.push('/layout')
    } else {
      notification.error({
        content: '提示：',
        meta: '用户名或密码错误',
        duration: 3000
      })
    }
  })
}
</script>

<style scoped>
.n-form-item {
  display: block;
}
</style>
