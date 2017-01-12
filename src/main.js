import Vue from 'vue'

import store from './store'
import router from './router'
import App from './App'

import 'materialize-loader'
import 'materialize-css'

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
