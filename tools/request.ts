import { WebRequest } from './webRequest'
import { WechatRequest } from './wechatRequest'
import { IsWechat } from './isWechat'
const isWechat: IsWechat = new IsWechat()

export function request(request: object) {
    if (!isWechat.getIsWechat()) {
      return WechatRequest(request)
    } else {
      return WebRequest(request)
    }
}
