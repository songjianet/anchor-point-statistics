import { Env } from '../env/env'

const env: Env = new Env()
const fly = require('flyio')

export function WebRequest(request: object) {
  fly.config.baseUrl = env.getBaseUrl()

  fly.interceptors.request.use((req: object) => {
    req = {...request}
    return req
  })

  fly.interceptors.response.use((res: object) => {
      // @ts-ignore
      return res.data
    }, () => {
      console.log('网络请求错误！')
    }
  )
}
