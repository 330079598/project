<script lang="ts" setup></script>

<template>
  <el-button circle icon="Refresh" size="small"></el-button>
  <el-button circle icon="FullScreen" size="small"></el-button>
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
