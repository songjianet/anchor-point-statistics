import { Browse } from '../api/browse'
import { Buy } from '../api/buy'
import { Favorites } from '../api/favorites'
import { Feedback } from '../api/feedback'
import { Like } from '../api/like'
import { ReturnPurchase } from '../api/returnPurchase'
import { Search } from '../api/search'

enum Operation {
  buy = 'BUY',
  browse = 'BROWSE',
  search = 'SEARCH',
  feedback = 'FEEDBACK',
  collect = 'COLLECT',
  thumbUp = 'THUMB_UP',
  returnPurchase = 'RETURN_GOODS'
}

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

  favorites(data: any) {
    data['operation_enum'] = Operation.collect

    Favorites(this.url, data, this.method)
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

    Search(this.url, data, this.method)
      .then((res: object) => {
        console.log(res)
      })
      .catch((err: object) => {
        console.log(err)
      })
  }
}
