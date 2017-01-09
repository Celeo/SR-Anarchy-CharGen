import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './data'

import App from './App'
import Landing from './pages/Landing'
import StartNewCharacter from './pages/StartNewCharacter'
import ContinueCharacter from './pages/ContinueCharacter'

import 'materialize-loader'
import 'materialize-css'


Vue.use(VueRouter)

const routes = [
  { path: '/', component: Landing },
  { path: '/new', component: StartNewCharacter },
  { path: '/continue', component: ContinueCharacter }
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
