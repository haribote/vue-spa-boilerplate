/**
 * webpack.base.config.babel.js
 * @see https://github.com/Toilal/vue-webpack-template/blob/master/template/build/webpack.base.conf.js
 */

import {resolve} from 'path'
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
        test: /template\.html$/,
        loader: 'vue-template-loader',
        options: {
          hmr: true,
          transformToRequire: {
            img: 'src'
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/misc/[name].[hash:7].[ext]'
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Vue SPA',
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]
}
