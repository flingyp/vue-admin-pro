<template>
  <div class="m-[2rem]">
    <n-card title="按钮">
      <div class="flex items-center flex-wrap mb-[-2rem]">
        <n-button>Default</n-button>
        <n-button type="tertiary"> Tertiary </n-button>
        <n-button type="primary"> Primary </n-button>
        <n-button type="info"> Info </n-button>
        <n-button type="success"> Success </n-button>
        <n-button type="warning"> Warning </n-button>
        <n-button type="error"> Error </n-button>
        <n-button strong secondary> Default </n-button>
        <n-button strong secondary type="tertiary"> Tertiary </n-button>
        <n-button strong secondary type="primary"> Primary </n-button>
        <n-button strong secondary type="info"> Info </n-button>
        <n-button strong secondary type="success"> Success </n-button>
        <n-button strong secondary type="warning"> Warning </n-button>
        <n-button strong secondary type="error"> Error </n-button>
        <n-button strong secondary round> Default </n-button>
        <n-button strong secondary round type="primary"> Primary </n-button>
        <n-button strong secondary round type="info"> Info </n-button>
        <n-button strong secondary round type="success"> Success </n-button>
        <n-button strong secondary round type="warning"> Warning </n-button>
        <n-button strong secondary round type="error"> Error </n-button>
        <n-button tertiary> Default </n-button>
        <n-button tertiary type="primary"> Primary </n-button>
        <n-button tertiary type="info"> Info </n-button>
        <n-button tertiary type="success"> Success </n-button>
        <n-button tertiary type="warning"> Warning </n-button>
        <n-button tertiary type="error"> Error </n-button>
        <n-button tertiary round> Default </n-button>
        <n-button tertiary round type="primary"> Primary </n-button>
        <n-button tertiary round type="info"> Info </n-button>
        <n-button tertiary round type="success"> Success </n-button>
        <n-button tertiary round type="warning"> Warning </n-button>
        <n-button tertiary round type="error"> Error </n-button>
      </div>
    </n-card>

    <n-card title="轮播图">
      <n-carousel autoplay>
        <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" />
        <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg" />
        <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg" />
        <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg" />
      </n-carousel>
    </n-card>

    <n-card title="表格">
      <n-table :single-line="false">
        <thead>
          <tr>
            <th>Abandon</th>
            <th>Abormal</th>
            <th>Abolish</th>
            <th>...</th>
            <th>万事开头难</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>放弃</td>
            <td>反常的</td>
            <td>彻底废除</td>
            <td>干！我刚才背的是啥</td>
          </tr>
          <tr>
            <td>放弃</td>
            <td>反常的</td>
            <td>彻底废除</td>
            <td>干！我刚才背的是啥</td>
          </tr>
        </tbody>
      </n-table>
    </n-card>

    <n-card title="警示信息">
      <n-alert title="Default 类型" type="default"> Gee it's good to be back home </n-alert>
      <n-alert title="Info 类型" type="info"> Gee it's good to be back home </n-alert>
      <n-alert title="Success 类型" type="success"> Leave it till tomorrow to unpack my case </n-alert>
      <n-alert title="Warning 类型" type="warning"> Honey disconnect the phone </n-alert>
      <n-alert title="Error 类型" type="error"> I'm back in the U.S.S.R. </n-alert>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { NCard, NButton, NCarousel, NAlert, NTable } from 'naive-ui'
</script>

<style scoped>
.n-card {
  border-radius: 10px;
  margin-bottom: 30px;
}

.n-button {
  margin-right: 15px;
  margin-bottom: 20px;
}

.carousel-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 5px;
}

.n-alert:not(:last-child) {
  margin-bottom: 10px;
}
</style>
