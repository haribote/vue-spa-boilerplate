/**
 * @file main.ts.
 */

import Vue from 'vue'
import './components/hooks'
import App from './components/App'
import router from './router'

// choose your stylesheet language
import './style.css'
// import './style.scss'
// import './style.styl'

/* tslint:disable no-unused-expression */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
