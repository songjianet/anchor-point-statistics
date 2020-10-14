import webRequest from './webRequest'
import uniRequest from './uniRequest'
import wechatRequest from './wechatRequest'

const baseUrl = 'http://192.168.1.134:9999/collection/'

export async function request(url: string, data: any, method: string, provide: string): Promise<any> {
  let response = null

  window.onerror = function() { return true }

  console.log(provide)

  if (provide === 'web') {
    response = await webRequest.request(baseUrl + url, data, {method})
  } else if (provide === 'uni') {
    response = await uniRequest.request(baseUrl + url, data, {method})
  } else if (provide === 'wechat') {
    response = await wechatRequest.request(baseUrl + url, data, {method})
  }

  return response
}
