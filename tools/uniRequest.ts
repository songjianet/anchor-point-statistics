const Fly = require('flyio/dist/npm/wx')
const uniRequest = new Fly

uniRequest.interceptors.request.use(
  (config: any) => {
    return config
  }, (error: any) => {
    return Promise.reject(error)
  }
)

uniRequest.interceptors.response.use(
  (response: any) => {
    return response.data
  }, (error: any) => {
    return Promise.reject(error)
  }
)

export default uniRequest
