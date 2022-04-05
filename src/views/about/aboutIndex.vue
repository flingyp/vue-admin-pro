<template>
  <div>
    <n-card title="Vue Admin Pro" bordered hoverable>
      Vue Admin Pro 是一款基于Vue3 + TypeScript +
      NaiveUI等技术栈搭建的后台系统。市面上已经开源成型的优秀后台系统太多了，理论上没有必要自己去造轮子了。
      所以对于本系统的定位：一、单纯用于快速熟练使用Vue3相关编码语法，二、给想要刚刚开始学习Vue3的开发者可以提供一个可参考项目。
    </n-card>

    <n-card title="生成环境相关依赖" bordered hoverable>
      <n-descriptions label-placement="left" bordered>
        <n-descriptions-item v-for="(item, index) in dependenciesArr" :key="index" :label="item.name">
          {{ item.version }}
        </n-descriptions-item>
      </n-descriptions>
    </n-card>

    <n-card title="开发环境相关依赖" bordered hoverable>
      <n-descriptions label-placement="left" bordered>
        <n-descriptions-item v-for="(item, index) in devDependenciesArr" :key="index" :label="item.name">
          {{ item.version }}
        </n-descriptions-item>
      </n-descriptions>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { NCard, NDescriptions, NDescriptionsItem } from 'naive-ui'

import projectConfigJson from '../../../package.json'

interface IpackJson {
  name: string
  version: string
  dependencies: Record<string, string>
  devDependencies: Record<string, string>
  [key: string]: any
}

interface IpackItem {
  name: string
  version: string
}

const { dependencies, devDependencies } = projectConfigJson as IpackJson

const dependenciesArr: IpackItem[] = []
const devDependenciesArr: IpackItem[] = []

Object.keys(dependencies).forEach((key) => {
  const dependenciesObj: IpackItem = { name: '', version: '' }
  dependenciesObj.name = key
  dependenciesObj.version = dependencies[key]
  dependenciesArr.push(dependenciesObj)
})

Object.keys(devDependencies).forEach((key) => {
  const dependenciesObj: IpackItem = { name: '', version: '' }
  dependenciesObj.name = key
  dependenciesObj.version = devDependencies[key]
  devDependenciesArr.push(dependenciesObj)
})
</script>

<style scoped>
.n-card {
  margin-bottom: 20px;
}

.n-card:last-child {
  margin: 0;
}
</style>
