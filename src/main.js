import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './data'

import App from './App'
import Landing from './pages/Landing'

import 'materialize-loader'
import 'materialize-css'


const routes = [
  { path: '/', component: Landing }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
