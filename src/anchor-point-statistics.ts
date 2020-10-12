import { test } from '../api/test'

export default class APS {

  constructor(data: object) {
    console.log(test('kafkaPublishTest/send', 'post', data))
  }
}
