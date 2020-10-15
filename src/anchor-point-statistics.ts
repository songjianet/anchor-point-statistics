import { Browse } from './lib/browse'
import { Buy } from './lib/buy'
import { Collect } from './lib/collect'
import { UnCollect } from './lib/unCollect'
import { Feedback } from './lib/feedback'
import { Like } from './lib/like'
import { ReturnPurchase } from './lib/returnPurchase'
import { Search } from './lib/search'
import { CloseApp } from './lib/closeApp'
import { OpenApp } from './lib/openApp'
import { Timestamp } from '../tools/timestamp'

enum Operation {
  buy = 'BUY',
  browse = 'BROWSE',
  search = 'SEARCH',
  feedback = 'FEEDBACK',
  collect = 'COLLECT',
  thumbUp = 'THUMB_UP',
  returnPurchase = 'RETURN_GOODS',
  unCollect = 'UNCOLLECT',
  openApp = 'OPEN_APP',
  closeApp = 'CLOSE_APP'
}

const timestamp = new Timestamp()

export default class APS {
  url: string = 'kafkaPublishTest/send'
  method: string = 'post'

  browse(data: any) {
    data['operation_enum'] = Operation.browse

    Browse(this.url, data, this.method)
      .then((res: object) => {
        console.log(res)
      })
      .catch((err: object) => {
        console.log(err)
      })
  }

  buy(data: any) {
    data['operation_enum'] = Operation.buy

    Buy(this.url, data, this.method)
      .then((res: object) => {
        console.log(res)
      })
      .catch((err: object) => {
        console.log(err)
      })
  }

  unCollect(data: any) {
    data['operation_enum'] = Operation.unCollect
    data['create_time'] = timestamp.getTimestamp()

    UnCollect(this.url, data, this.method)
      .then((res: object) => {
        console.log(res)
      })
      .catch((err: object) => {
        console.log(err)
      })
  }

  collect(data: any) {
    data['operation_enum'] = Operation.collect
    data['create_time'] = timestamp.getTimestamp()

    Collect(this.url, data, this.method)
      .then((res: object) => {
        console.log(res)
      })
      .catch((err: object) => {
        console.log(err)
      })
  }

  openApp(data: any) {
    data['operation_enum'] = Operation.openApp
    data['create_time'] = timestamp.getTimestamp()

    OpenApp(this.url, data, this.method)
      .then((res: object) => {
        console.log(res)
      })
      .catch((err: object) => {
        console.log(err)
      })
  }

  closeApp(data: any) {
    data['operation_enum'] = Operation.closeApp
    data['create_time'] = timestamp.getTimestamp()

    CloseApp(this.url, data, this.method)
      .then((res: object) => {
        console.log(res)
      })
      .catch((err: object) => {
        console.log(err)
      })
  }

  feedback(data: any) {
    data['operation_enum'] = Operation.feedback

    Feedback(this.url, data, this.method)
      .then((res: object) => {
        console.log(res)
      })
      .catch((err: object) => {
        console.log(err)
      })
  }

  like(data: any) {
    data['operation_enum'] = Operation.thumbUp

    Like(this.url, data, this.method)
      .then((res: object) => {
        console.log(res)
      })
      .catch((err: object) => {
        console.log(err)
      })
  }

  returnPurchase(data: any) {
    data['operation_enum'] = Operation.returnPurchase

    ReturnPurchase(this.url, data, this.method)
      .then((res: object) => {
        console.log(res)
      })
      .catch((err: object) => {
        console.log(err)
      })
  }

  search(data: any) {
    data['operation_enum'] = Operation.search
    data['create_time'] = timestamp.getTimestamp()

    Search(this.url, data, this.method)
      .then((res: object) => {
        console.log(res)
      })
      .catch((err: object) => {
        console.log(err)
      })
  }
}
