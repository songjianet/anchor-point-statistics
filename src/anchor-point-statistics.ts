import { test } from '../api/test'

export const APS = (data: object, provide: string) => {
  test('kafkaPublishTest/send', data, 'post', provide)
    .then((res: object) => {
      console.log('apsres', res)
    })
    .catch((err: object) => {
      console.log('apserr', err)
    })
}
