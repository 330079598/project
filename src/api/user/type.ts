//定义用户相关数据的ts类型
//用户登录接口携带参数的ts类型
// 登录接口需要携带参数ts类型
export interface LoginFormData {
  username?: string
  password?: string
}

export interface ResponseData {
  code?: number
  message?: string
  ok?: boolean
}

export interface LoginResponseData extends ResponseData {
  data: {
    token: string
    message: string
  }
}

export interface userInfoResponseData extends ResponseData {
  data: {
    routes: string[]
    buttons: string[]
    roles: string[]
    name: string
    avatar: string
  }
}
