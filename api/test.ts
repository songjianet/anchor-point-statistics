import { request } from '../tools/request'
import { Env } from '../env/env'

const env: Env = new Env()

export const test = (url: string, data: any, method: string): Promise<any> => {
  return request(env.getBaseUrl() + 'kafkaPublishTest/send', data, method)
}
