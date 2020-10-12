import { Env } from '../env/env'

const env: Env = new Env()
const Fly = require('flyio/dist/npm/wx')
const wechatFly = new Fly

export function WechatRequest(request: object) {
  wechatFly.config.baseUrl = env.getBaseUrl()

  wechatFly.interceptors.request.use((req: object)=>{
    req = {...request}
    return req
  })

  wechatFly.interceptors.response.use((res: object) => {
      // @ts-ignore
      return res.data
    }, () => {
      console.log('网络请求错误！')
    }
  )
}
