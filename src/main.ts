import Vue from 'vue'

/* tslint:disable no-unused-expression */
new Vue({
  el: '#app',
  render: h => h(
    'div',
    {
      attrs: {
        id: 'app'
      }
    },
    [
      h(
        'h1',
        [
          'Hello, world!'
        ]
      )
    ]
  )
})
