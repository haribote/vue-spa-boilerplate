/**
 * webpack.base.config.babel.js
 * @see https://github.com/Toilal/vue-webpack-template/blob/master/template/build/webpack.base.conf.js
 * @see https://webpack.js.org/loaders/sass-loader/
 */

import {resolve} from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const isProduction = process.env.NODE_ENV === 'production'

const extractCss = new ExtractTextPlugin({
  filename: 'assets/css/[name].[contenthash].css',
  disable: !isProduction
});

const cssLoaders = [
  {
    loader: 'css-loader',
    options: {
      sourceMap: !isProduction
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: !isProduction,
      config: {
        ctx: {
          cssnano: {},
          autoprefixer: {
            browsers: ['last 2 versions']
          }
        }
      }
    }
  }
]

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
        test: /\.css$/,
        use: extractCss.extract({
          use: cssLoaders.concat([]),
          // use style-loader in development
          fallback: 'style-loader'
        })
      },
      {
        test: /\.scss$/,
        use: extractCss.extract({
          use: cssLoaders.concat([
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !isProduction
              }
            }
          ]),
          // use style-loader in development
          fallback: 'style-loader'
        })
      },
      {
        test: /\.styl/,
        use: extractCss.extract({
          use: cssLoaders.concat([
            {
              loader: 'stylus-loader',
              options: {
                sourceMap: !isProduction
              }
            }
          ]),
          // use style-loader in development
          fallback: 'style-loader'
        })
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
    extractCss,
    new HtmlWebpackPlugin({
      title: 'Vue SPA',
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]
}
