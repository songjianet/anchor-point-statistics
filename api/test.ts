import { request } from '../tools/request'

export function test(url: string, method: string, data: object) {
  return request({
    url: 'kafkaPublishTest/send',
    method: 'get',
    data
  })
}
