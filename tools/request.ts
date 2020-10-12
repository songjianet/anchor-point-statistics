import { IsWechat } from './isWechat'
const isWechat: IsWechat = new IsWechat()

const fly = require('flyio')
const Fly = require('flyio/dist/npm/wx')
const wechatFly = new Fly

const baseUrl = 'http://192.168.1.134:9999'

export function request(url: string, data: object, method: string) {
  if (!isWechat.getIsWechat()) {
    return wechatFly.request(baseUrl + url, data, {method})
  } else {
    return fly.request(baseUrl + url, data, {method})
  }
}
