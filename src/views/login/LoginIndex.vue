<template>
  <div class="w-screen h-screen" :style="{ backgroundImage: currentBgColor }">
    <n-card class="box-page-center w-[100rem] p-[1rem]">
      <div class="flex items-center mb-[5rem]">
        <SvgIcon name="logo-rocket" class="w-[4rem] h-[4rem] mr-[1.5rem] text-primary"></SvgIcon>
        <span class="text-primary font-mono font-bold font text-[3rem]">Vue Admin Pro</span>
      </div>
      <div class="flex justify-between">
        <div class="flex-1">
          <SvgIcon name="login-system-img" class="w-[100%] h-[35rem] text-primary"></SvgIcon>
        </div>
        <div class="w-[35rem] ml-[4rem]">
          <div class="font-mono text-center text-[2rem]">Welcome Back</div>
          <div class="mt-[4rem]">
            <n-form ref="formRef" :model="loginFormData" :rules="loginRules">
              <n-form-item path="username">
                <n-input size="large" v-model:value="loginFormData.username" placeholder="请输入个人账号："></n-input>
              </n-form-item>
              <n-form-item path="password">
                <n-input
                  v-model:value="loginFormData.password"
                  placeholder="请输入密码："
                  type="password"
                  size="large"
                  show-password-on="click"
                ></n-input>
              </n-form-item>
              <n-form-item>
                <n-button type="primary" class="w-full !text-[#fff]" @click="handlerUserLogin">登录</n-button>
              </n-form-item>
            </n-form>
          </div>
        </div>
      </div>
    </n-card>

    <div class="absolute top-[3rem] left-[3rem]">
      <ThemeSwitchIcon></ThemeSwitchIcon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { colord } from 'colord'
import { NCard, NForm, NFormItem, NInput, NButton, FormRules, FormInst, useNotification } from 'naive-ui'
import { useRouter } from 'vue-router'
import SvgIcon from '@/components/SvgIcon.vue'
import ThemeSwitchIcon from '@/components/ThemeSwitchIcon.vue'

import { userLogin } from '@/apis/user'

import { useSysStore } from '@/store/modules/sysStore'

import { setLocalKey } from '@/utils/common/handleLocalStorage'

const router = useRouter()
const sysStore = useSysStore()

const loginFormData = reactive({
  username: 'admin',
  password: '123456'
})

const loginRules: FormRules = {
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

const currentBgColor = computed(() => {
  const { themeColor } = sysStore
  const getBgColor1 = colord(themeColor).alpha(0.4).toRgbString()
  const getBgColor2 = colord(themeColor).alpha(0.6).toRgbString()
  const blackColor = colord('#000').alpha(0.8).toRgbString()
  if (sysStore.themeMode === 'light') {
    return `linear-gradient(30deg, ${getBgColor1}, ${getBgColor2})`
  }
  return `linear-gradient(180deg, ${blackColor}, ${getBgColor1},${getBgColor2}, ${blackColor})`
})

const formRef = ref<FormInst | null>(null)
// 点击登录
const notification = useNotification()
const handlerUserLogin = () => {
  // 验证
  formRef.value?.validate(async (errors) => {
    if (errors) return

    const loginResData = await userLogin(loginFormData.username, loginFormData.password)

    if (loginResData.code === 200) {
      setLocalKey('accessToken', loginResData.data)
      notification.success({
        content: '提示：',
        meta: '登录成功！ 即将进行系统，请稍等',
        duration: 2000,
        onAfterLeave: () => {
          router.push('/test')
        }
      })
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
