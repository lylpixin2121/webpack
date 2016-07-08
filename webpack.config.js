// webpack.config.js
var path = require('path')
var webpack = require('webpack');

console.log(__dirname);
module.exports = {
  entry: {
    bundle1 : "./src/index",
    bundle2 : "./src/entry",
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
    })
  ],
  module: {
    loaders: [
      {test: /\.css$/,loaders: ['style', 'css']},
      {test: /\.(png|jpg)$/,loaders: ['url']}
    ]
  }
}