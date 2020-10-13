import webRequest from './webRequest'
import wechatRequest from './wechatRequest'
import { IsWechat } from './isWechat'
const isWechat: IsWechat = new IsWechat()

export async function request(url: string, data: any, method: string): Promise<any> {
    let response = null

    if (!isWechat.getIsWechat()) {
      response = await wechatRequest.request(url, data, {method})
    } else {
      response = await webRequest.request(url, data, {method})
    }

    return response
}
