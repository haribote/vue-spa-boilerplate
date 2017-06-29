/**
 * webpack.base.config.babel.js
 * @see https://github.com/vuejs-templates/webpack/blob/master/template/build/webpack.base.conf.js
 */

import {resolve} from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  entry: ['./src/main.ts'],

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Vue SPA',
      filename: 'index.html',
      template: 'src/index.pug'
    })
  ]
}
