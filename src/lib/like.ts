import { request } from '../../tools/request/request'
import { RequestApiInterface } from '../../tools/request/requestApiInterface'
import { Env } from '../../env/env'

const env: Env = new Env()

export const Like: RequestApiInterface = (url, data, method) => {
  return request(env.getBaseUrl() + 'kafkaPublishTest/send', data, method)
}
