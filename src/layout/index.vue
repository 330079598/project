<script lang="ts" setup>
import logo from '@/layout/logo/index.vue'
import useUserStore from '@/store/modules/user'
import Menu from '@/layout/menu/index.vue'
import { useRoute } from 'vue-router'
import Tabbar from '@/layout/tabbar/index.vue'
import useLayOutSettingStore from '@/store/modules/setting'

let layOutSettingStore = useLayOutSettingStore()

let $route = useRoute()
let userStore = useUserStore()
</script>
<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <logo />
      <!-- 展示菜单 -->
      <el-scrollbar class="scrollbar">
        <el-menu
          :collapse="layOutSettingStore.fold"
          :default-active="$route.path"
          background-color="#001529"
          text-color="#ffff"
        >
          <Menu :menuList="userStore.menuRoutes" />
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div :class="{ fold: layOutSettingStore.fold }" class="layout_tabbar">
      <Tabbar />
    </div>
    <!-- 内容展示区域 -->
    <div :class="{ fold: layOutSettingStore.fold }" class="layout_main">13</div>
  </div>
</template>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;
  background: white;

  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    color: white;
    background: $base-menu-background;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);

      .el-menu {
        border-right: none;
      }
    }
  }
}

.layout_tabbar {
  position: fixed;
  top: 0;
  left: $base-menu-width;
  width: calc(100% - $base-menu-width);
  height: $base-tabbar-height;
  transition: all 0.3s;

  &.fold {
    width: calc(100vw - $base-menu-min-width);
    left: $base-menu-min-width;
  }
}

.layout_main {
  position: absolute;
  top: $base-tabbar-height;
  left: $base-menu-width;
  width: calc(100% - $base-menu-width);
  height: calc(100vh - $base-tabbar-height);
  padding: 20px;
  overflow: auto;
  transition: all 0.3s;
  background: pink;
  transition: all 0.3s;

  &.fold {
    width: calc(100vw - $base-menu-min-width);
    left: $base-menu-min-width;
  }
}
</style>
