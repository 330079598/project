<script lang="ts" setup>
import useLayOutSettingStore from '@/store/modules/setting'
import { useRoute } from 'vue-router'

let layOutSettingStore = useLayOutSettingStore()
let $route = useRoute()
const changeIcon = () => {
  layOutSettingStore.fold = !layOutSettingStore.fold
}
</script>

<template>
  <!-- 顶部左侧静态 -->
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="layOutSettingStore.fold ? 'Fold' : 'Expand'" />
  </el-icon>
  <!-- 左侧面包屑 -->
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="(item, index) in $route.matched"
      v-show="item.meta.title"
      :key="index"
      :to="item.path"
      style="margin: 0px 3px"
    >
      <!-- 图标 -->
      <el-icon>
        <component :is="item.meta.icon" />
      </el-icon>
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped></style>
