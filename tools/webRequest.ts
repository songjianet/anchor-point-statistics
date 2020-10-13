const webRequest = require('flyio')

webRequest.interceptors.request.use(
  (config: any) => {

    return config
  }, (error: any) => {
    return Promise.reject(error)
  }
)

webRequest.interceptors.response.use(
  (response: any) => {
    return response.data
  }, (error: any) => {
    return Promise.reject(error)
  }
)

export default webRequest
