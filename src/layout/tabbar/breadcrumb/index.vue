<script lang="ts" setup>
import useLayOutSettingStore from '@/store/modules/setting'

let layOutSettingStore = useLayOutSettingStore()
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
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped></style>
