/**
 * webpack.dev.config.babel.js
 * @see https://github.com/vuejs-templates/webpack/blob/master/template/build/webpack.prod.conf.js
 */

import webpack from 'webpack'
import merge from 'webpack-merge'
import baseWebpackConfig from './webpack.base.config.babel'

export default merge(baseWebpackConfig, {
  output: {
    filename: 'bundle.[chunkhash].js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"${process.env.NODE_ENV}"`
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ]
})
