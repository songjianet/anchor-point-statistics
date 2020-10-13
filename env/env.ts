export class Env {
  baseUrl: string = 'http://192.168.1.134:9999/collection/'
  operatingEnvironment: string = 'web'

  constructor() {
    // @ts-ignore
    if(!window.__WeixinJSBridge || !window__WeixinJSBridge.invoke) {
      document.addEventListener('WeixinJSBridgeReady', () => {
        // @ts-ignore
        if (window.__wxjs_environment === 'miniprogram') {
          this.operatingEnvironment = 'wechat mini-program'
        } else {
          this.operatingEnvironment = 'wechat'
        }
      }, false)
    }

    console.log('env', this.operatingEnvironment)
  }

  getOperatingEnvironment() {
    return this.operatingEnvironment
  }

  getBaseUrl() {
    return this.baseUrl
  }
}
