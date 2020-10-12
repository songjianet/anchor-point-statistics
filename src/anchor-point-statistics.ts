import { request } from '../tools/request'

export default class APS {
  constructor(data: object) {
    request('/kafkaPublishTest/send', data, 'post').then((res: object) => {
      console.log(res)
    }).catch((err: object) => {
      console.log(err)
    })
  }
}
