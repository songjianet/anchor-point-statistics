import { test } from '../api/test'

export default class APS {

  constructor(data: object) {
    test('kafkaPublishTest/send', data, 'post').then((res: object) => {
      console.log('apsres', res)
    }).catch((err: object) => {
      console.log('apserr', err)
    })
  }
}
