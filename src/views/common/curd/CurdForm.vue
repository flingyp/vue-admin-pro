<template>
  <div class="m-[2rem]">
    <div class="mb-[2rem] flex items-center">
      <div class="mr-[2rem]">
        <span class="mr-[1rem]">用户名：</span>
        <n-input type="text" placeholder="请输入用户名" class="!w-[20rem]" size="small"></n-input>
      </div>
      <div>
        <span class="mr-[1rem]">家庭地址：</span>
        <n-input type="text" placeholder="请输入家庭地址" class="!w-[20rem]" size="small"></n-input>
      </div>

      <div class="mx-[2rem]">
        <n-button class="!w-[8rem] mx-[1rem]" type="primary" size="small">搜索</n-button>
        <n-button class="!w-[8rem] mx-[1rem]" size="small">重置</n-button>
      </div>
    </div>

    <div class="mb-[2rem]">
      <n-button class="w-[8rem] mr-[2rem]" size="small">
        <IconifyIconVue iconLabel="fluent:add-20-regular" :fontSize="14"></IconifyIconVue>
        <span>新增</span>
      </n-button>

      <n-button class="w-[8rem]" type="warning" size="small">
        <IconifyIconVue iconLabel="fluent:delete-28-regular" :fontSize="14"></IconifyIconVue>
        <span>删除</span>
      </n-button>
    </div>

    <n-data-table
      striped
      :columns="TableColumns"
      :data="TableData"
      size="medium"
      :pagination="TablePagination"
      :row-key="(row: TableDataFormat) => row.id"
      @update:checked-row-keys="handleUpdateChoice"
    ></n-data-table>
  </div>
</template>

<script setup lang="ts">
import { h, ref, reactive } from 'vue'
import { NDataTable, NButton, NInput } from 'naive-ui'
import type { DataTableColumn } from 'naive-ui'

import IconifyIconVue from '@/components/IconifyIcon.vue'

interface TableDataFormat {
  id: string
  username: string
  address: string
  phone: string
}

// 表格列
const TableColumns: Array<DataTableColumn<TableDataFormat>> = [
  {
    type: 'selection'
  },
  {
    title: 'ID',
    align: 'center',
    key: 'id'
  },
  {
    title: '用户名',
    align: 'center',
    key: 'username'
  },
  {
    title: '家庭住址',
    align: 'center',
    key: 'address'
  },
  {
    title: '联系电话',
    align: 'center',
    key: 'phone'
  },
  {
    title: '操作',
    align: 'center',
    key: 'ColumnHandle',
    render(row) {
      // row 某条数据信息
      const ActionsArr = [
        h(NButton, { size: 'small', style: { margin: '0 5px' } }, { default: () => '编辑' }),
        h(NButton, { type: 'warning', size: 'small', style: { margin: '0 5px' } }, { default: () => '删除' })
      ]
      return ActionsArr
    }
  }
]

// 表格数据
const TableData = ref<TableDataFormat[]>([
  {
    id: '20220501',
    username: '星期天',
    address: '江西省上饶市',
    phone: '123456789'
  },
  {
    id: '20220502',
    username: '星期一',
    address: '江西省上饶市',
    phone: '123456789'
  },
  {
    id: '20220503',
    username: '星期二',
    address: '江西省上饶市',
    phone: '123456789'
  },
  {
    id: '20220504',
    username: '星期三',
    address: '江西省上饶市',
    phone: '123456789'
  },
  {
    id: '20220505',
    username: '星期四',
    address: '江西省上饶市',
    phone: '123456789'
  },
  {
    id: '20220506',
    username: '星期五',
    address: '江西省上饶市',
    phone: '123456789'
  }
])

// 表格分页
const TablePagination = reactive({
  page: 1,
  pageSize: 5,
  pageSizes: [5, 10],
  // pageSizes: [
  //   { label: '5 / 页', value: 5 },
  //   { label: '10 / 页', value: 10 },
  //   { label: '15 / 页', value: 15 },
  //   { label: '20 / 页', value: 20 }
  // ],
  showSizePicker: true,
  onChange: (page: number) => {
    TablePagination.page = page
  },
  onUpdatePageSize: (pageSize: number) => {
    TablePagination.pageSize = pageSize
    TablePagination.page = 1
  }
})

/**
 * @update:checked-row-keys：checked-row-keys 值改变时触发的回调函数
 * 当我们勾选 最前面的单选框 会将 :row-key="(row: TableDataFormat) => row.id" 的 ID 值 放置在 checkedRowKeysRef数组中
 */
const checkedRowKeysRef = ref<unknown[]>([])
const handleUpdateChoice = (rowKeys: unknown[]) => {
  checkedRowKeysRef.value = rowKeys
}
</script>

<style scoped></style>
