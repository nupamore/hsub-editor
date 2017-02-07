
const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'source-map',
  context: path.resolve(__dirname, 'src'),
  entry: {
    core: './core',
  },
  output: {
    filename: path.resolve(__dirname, 'js/editor.js'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue',
      },
    ],
  },
  plugins: [new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
    minimize: true,
    sourceMap: true,
  })],
}