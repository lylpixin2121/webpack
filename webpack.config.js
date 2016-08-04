// webpack.config.js
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


console.log(__dirname);
module.exports = {
  // entry: "./src_test/js/index",
  entry : {
    test : "./src_test/js/index",
    topic : "./src_test/js/topic",
    swiper : ['./src_test/js/swiper']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name : ['swiper'],//将公共模块提取
      minChunks : Infinity //提取所有entry共同依赖的模块
    }),
    new HtmlWebpackPlugin({
      title : "my app"
    })

  ],
  module: {
    loaders: [
      {test: /\.css$/,loaders: ['style', 'css']},
      {test: /\.(png|jpg)$/,loaders: ['url']}
    ]
  }
}