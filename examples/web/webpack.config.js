const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',  // production Or development 环境
  entry: path.resolve(__dirname, 'src/main.js'), // 入口文件
  output: {
    path: path.resolve(__dirname, 'dist'), // 必须是绝对路径
    filename: 'js/[name].[hash].js', // 「入口分块(entry chunk)」的文件名模板（出口分块？）
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true, // 压缩
    port: 8000,
    hot: true, // 热加载
    open: true, // 自定打开默认浏览器
  },
  plugins: [ // 插件
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './examples/web/index.html',
      hash: false, // 添加hash清除缓存
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      { test: /\.css$/, use: ['css-loader'] },
      { test: /\.vue$/, use: 'vue-loader' }
    ]
  }
}
