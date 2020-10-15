import { request } from '../tools/request'
import { RequestApiInterface } from '../tools/requestApiInterface'
import { Env } from '../env/env'

const env: Env = new Env()

export const Collect:RequestApiInterface = (url, data, method) => {
  return request(env.getBaseUrl() + 'kafkaPublishTest/send', data, method)
}
