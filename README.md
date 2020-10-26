## multi-function-table

> 使用`TypeScript`实现全平台用户行为统计，需要配合后端

### 安装

#### 使用npm进行安装

```shell script
npm install anchor-point-statistics
```

#### 使用yarn进行安装

```shell script
yarn add anchor-point-statistics
```


### 快速上手

在组件中引入：

```shell script
import APS from 'anchor-point-statistics/dist/anchor-point-statistics.es5'
```

### api

#### 打开应用

```ecmascript 6
const aps = new APS

aps.openApp({ 
  user_id: '' // 用户id
})
```

#### 关闭应用

```ecmascript 6
const aps = new APS

aps.closeApp({ 
  user_id: '' // 用户id
})
```

#### 收藏商品

```ecmascript 6
const aps = new APS

aps.collect({ 
  user_id: '', // 用户id
  product_id: '', // 商品id
  product_name: '' // 商品名称
})
```

#### 取消收藏商品

```ecmascript 6
const aps = new APS

aps.unCollect({ 
  user_id: '', // 用户id
  product_id: '', // 商品id
  product_name: '' // 商品名称
})
```

#### 搜索商品

```ecmascript 6
const aps = new APS

aps.unCollect({ 
  user_id: '', // 用户id
  keyword: '' // 搜索内容
})
```

#### 浏览商品详情

```ecmascript 6
const aps = new APS

aps.browse({
  user_id: '', // 用户id
  product_id: '', // 商品id
  product_name: '' // 商品名称
})
```

#### 浏览商品列表

```ecmascript 6
const aps = new APS

aps.browse({
  user_id: '', // 用户id
  product_name: 'name1/ name2/ name3' // 名称以/进行分割
})
```

#### 浏览商品列表时间

浏览商品列表时间的实现方式是进入页面时调用一次`api`，退出页面时在调用一次`api`，进入页面可以搭配浏览商品列表使用，时间由`sdk`内部进行集成。

##### 进入页面
```ecmascript 6
const aps = new APS

// 配合浏览商品列表
aps.browse({
  user_id: '', // 用户id
  product_name: 'name1/ name2/ name3' // 名称以/进行分割
})

// 不配合商品列表
aps.browse({
  user_id: '' // 用户id
})
```

##### 退出页面

`uni-app`的使用方式和传统`node`环境有所区别，
`uni-app`在编译成小程序后，
页面退出的生命周期为`onHide`，
但是一个微信小程序归根到底是一个应用，
当用户直接用手机的任务管理器关闭小程序时`onHide`是无法进行监听，
所以应该使用`onHide`和`onUnload`。

```ecmascript 6
const aps = new APS

onHide: function() {
  const aps = new APS
  aps.browse({
    user_id: this.userInfo.uid ? this.userInfo.uid : ''
  })
},

onUnload: function() {
  const aps = new APS
  aps.browse({
    user_id: this.userInfo.uid ? this.userInfo.uid : ''
  })
}
```

#### 支付商品

```ecmascript 6
const aps = new APS

aps.buy({
  user_id: '', // 用户id
  pay_type: 0, // 支付类型
  product_id: '', // 商品id
  product_name: '' // 商品名称
})
```

#### 聚合支付商品

```ecmascript 6
const aps = new APS

aps.buy({
  user_id: '', // 用户id
  pay_type: 0, // 支付类型
  product_name: "[{name: '商品名称', id: '商品id'}, {name: '商品名称', id: '商品id'}]"
})
```

#### 退货

```ecmascript 6
const aps = new APS

aps.buy({
  user_id: '', // 用户id
  product_id: '', // 商品id
  product_name: '' // 商品名称
})
```

#### 聚合支付退货

```ecmascript 6
const aps = new APS

aps.buy({
  user_id: '', // 用户id
  product_name: "[{name: '商品名称', id: '商品id'}, {name: '商品名称', id: '商品id'}]"
})
```
