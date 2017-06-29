/**
 * dev-server.babel.js
 * @see https://github.com/vuejs-templates/webpack/blob/master/template/build/dev-server.js
 */

import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import connectHistoryApiFallback from 'connect-history-api-fallback'
import webpackConfig from './webpack.dev.config.babel'

const app = express()
const compiler = webpack(webpackConfig)

const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: '/',
  quiet: true
})

const hotMiddleware = webpackHotMiddleware(compiler, {
  log: () => {}
})

// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', compilation => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, cb) =>  {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// handle fallback for HTML5 history API
app.use(connectHistoryApiFallback())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

const port = process.env.PORT || 3000
const uri = `http://localhost:${port}`

let _resolve
const readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log(`> Listening at ${uri}\n`)
  _resolve()
})

const server = app.listen(port)

export default {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
