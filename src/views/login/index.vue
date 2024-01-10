<script lang="ts" setup>
import { Lock, User } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import useUserStore from '@/store/modules/user.ts'
import { ElNotification } from 'element-plus'
import { useRouter } from 'vue-router'
import { getTime } from '@/utils/times.ts'

let $router = useRouter()
// 引入用户相关的小仓库
let useStore = useUserStore()
// 收集账号与密码
let loginForm = reactive({
  username: 'admin',
  password: '111111',
})
let loading = ref(false)
let loginForms = ref()
const rules = {
  username: [
    {
      required: true,
      min: 6,
      max: 15,
      message: '账户至少6位，最多15位',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      min: 6,
      max: 20,
      message: '密码至少6位，最多20位',
      trigger: 'blur',
    },
  ],
}

const login = async () => {
  await loginForms.value.validate(async (valid: boolean) => {
    if (valid) {
      loading.value = true
      // 通知仓库发送登陆请求
      try {
        await useStore.userLogin(loginForm)
        await $router.push('/')
        ElNotification({
          type: 'success',
          title: '欢迎回来',
          message: `HI, ${getTime()}好`,
        })
      } catch (err) {
        ElNotification({
          type: 'error',
          message: (err as Error).message,
        })
      } finally {
        loading.value = false
      }
    }
  })
}
</script>

<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          ref="loginForms"
          :model="loginForm"
          :rules="rules"
          class="login_form"
        >
          <h1>hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" :prefix-icon="User" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              :prefix-icon="Lock"
              show-password
              type="password"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              class="login_bt"
              size="default"
              type="primary"
              @click="login"
            >
              登陆
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    top: 30vh;
    width: 80%;
    padding: 50px 10vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;

    h1 {
      font-size: 40px;
      color: white;
    }

    h2 {
      margin: 20px 0;
      font-size: 20px;
      color: white;
    }

    .login_bt {
      width: 100%;
    }
  }
}
</style>
