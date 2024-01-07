import { createApp } from 'vue'
import App from '@/App.vue'
// 引入 element-plus 插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// element-plus 国际化
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// svg 文件引入
import 'virtual:svg-icons-register'
// 引入自定义插件对象：注册整个项目的全局组件
import globalComponent from '@/components'

// 获取应用实例对象
const app = createApp(App)
// 安装 element-plus 插件
app.use(ElementPlus, {
  locale: zhCn,
})
// 安装自定义插件
app.use(globalComponent)
// 将应用挂在到挂在点上
app.mount('#app')
