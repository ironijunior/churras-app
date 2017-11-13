import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import Home from './components/Home.vue'
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueMaterial)

new Vue({
  el: '#app',
  render: h => h(Login)
})

export var router = new VueRouter()

router.map({
  '/home': {
    component: Home
  },
  '/login': {
    component: Login
  },
  '/signup': {
    component: SignUp
  }
})

router.redirect({
  '*': '/home'
})

router.start(Home, '#app')
