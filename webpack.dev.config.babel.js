/**
 * webpack.dev.config.babel.js
 * @see https://github.com/vuejs-templates/webpack/blob/master/template/build/webpack.dev.conf.js
 */

import webpack from 'webpack'
import merge from 'webpack-merge'
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin'
import baseWebpackConfig from './webpack.base.config.babel'

baseWebpackConfig.entry = ['./dev-client.babel.js'].concat(baseWebpackConfig.entry)

export default merge(baseWebpackConfig, {
  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin()
  ]
})
