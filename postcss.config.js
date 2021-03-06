/**
 * @file postcss.config.js.
 */

module.exports = ({ file, options, env }) => ({
  parser: file.extname === '.sss' ? 'sugarss' : false,
  plugins: {
    'autoprefixer': env === 'production' ? options.autoprefixer : false,
    'cssnano': env === 'production' ? options.cssnano : false
  }
})
