import { IsWechat } from '../tools/isWechat'
const fly = require('flyio')
const Fly = require('flyio/dist/npm/wx')
const wechatFly = new Fly
const isWechat: IsWechat = new IsWechat()

export default class APS {
  constructor(config: any) {
    console.log(config)

    if (!isWechat.getIsWechat()) {
      wechatFly.get('https://cn1.api.wfblog.net/163.comment.php').then((res: object) => {
        console.log(res)
      }).catch((err: object) => {
        console.log(err)
      })
    } else {
      fly.get('https://cn1.api.wfblog.net/163.comment.php').then((res: object) => {
        console.log(res)
      }).catch((err: object) => {
        console.log(err)
      })
    }
  }
}
