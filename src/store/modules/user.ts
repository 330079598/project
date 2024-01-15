// 创建用户相关的小仓库
import { defineStore } from 'pinia'

import type { LoginFormData } from '@/api/user/type'
import { reqLogin } from '@/api/user'
import { UserState } from '@/store/modules/type.ts'
import { GET_TOKEN, SET_TOKEN } from '@/utils/token.ts'
import { constantRoute } from '@/router/routers.ts'

const useUserStore = defineStore('User', {
  // 小仓库存储数据的地方
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoute, //仓库存储生成菜单需要数组(路由)
    }
  },
  // 异步|逻辑
  actions: {
    async userLogin(data: LoginFormData) {
      await reqLogin(data).then((res) => {
        if (res.code == 200) {
          this.token = res.data.token || null
          SET_TOKEN(res.data.token)
          return 'ok'
        } else {
          return Promise.reject(new Error(res.data.message))
        }
      })
    },
  },
  getters: {},
})

export default useUserStore
