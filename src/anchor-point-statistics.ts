import { test } from '../api/test'

export const APS = (data: object) => {
  test('kafkaPublishTest/send', data, 'post')
    .then((res: object) => {
      console.log('apsres', res)
    })
    .catch((err: object) => {
      console.log('apserr', err)
    })
}
