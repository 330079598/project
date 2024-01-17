<script lang="ts" setup>
import useLayOutSettingStore from '@/store/modules/setting.ts'

let layOutSettingStore = useLayOutSettingStore()
const refresh = () => {
  layOutSettingStore.refresh = !layOutSettingStore.refresh
}

const fullScreen = () => {
  let full = document.fullscreenElement
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}
</script>

<template>
  <el-button circle icon="Refresh" size="small" @click="refresh"></el-button>
  <el-button
    circle
    icon="FullScreen"
    size="small"
    @click="fullScreen"
  ></el-button>
  <el-button circle icon="Setting" size="small"></el-button>
  <img src="/logo.png" style="width: 25px; height: 25px; margin: 0px 10px" />
  <el-dropdown>
    <span class="el-dropdown-link">
      admin
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped></style>
