import webRequest from './webRequest'
import wechatRequest from './wechatRequest'
import { Env } from '../env/env'

const env: Env = new Env()

export async function request(url: string, data: any, method: string): Promise<any> {
    let response = null

    console.log('request', env.getOperatingEnvironment())

    // response = await webRequest.request(env.getBaseUrl() + url, data, {method})
    // response = await wechatRequest.request(env.getBaseUrl() + url, data, {method})

    // if (env.getOperatingEnvironment() === 'web') {
    //   response = await webRequest.request(env.getBaseUrl() + url, data, {method})
    // } else {
    //   response = await wechatRequest.request(env.getBaseUrl() + url, data, {method})
    // }

    return response
}
