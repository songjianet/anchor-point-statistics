import webRequest from './webRequest'
import wechatRequest from './wechatRequest'
import { RequestApiInterface } from './requestApiInterface'
import { IsWechat } from './isWechat'
const isWechat: IsWechat = new IsWechat()

export const request:RequestApiInterface = async (url, data, method) => {
    let response = null

    if (!isWechat.getIsWechat()) {
      response = await wechatRequest.request(url, data, {method})
    } else {
      response = await webRequest.request(url, data, {method})
    }

    return response
}
