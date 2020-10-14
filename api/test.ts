import { request } from '../tools/request'


export const test = (url: string, data: any, method: string, provide: string): Promise<any> => {
  return request(url, data, method, provide)
}
