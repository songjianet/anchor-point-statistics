const Fly = require('flyio/dist/npm/wx')
const wechatRequest = new Fly

wechatRequest.interceptors.request.use(
  (config: any) => {
    return config
  }, (error: any) => {
    return Promise.reject(error)
  }
)

wechatRequest.interceptors.response.use(
  (response: any) => {
    return response.data
  }, (error: any) => {
    return Promise.reject(error)
  }
)

export default wechatRequest
