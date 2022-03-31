<template>
  <!-- <suspense> 处理在setup语法糖直接使用await导致页面空白问题 -->
  <!-- https://blog.csdn.net/zy21131437/article/details/113823014 -->
  <suspense>
    <router-view></router-view>
  </suspense>
</template>

<script setup lang="ts"></script>

<style></style>
