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

const routes = [
  { path: '/home', component: Home },
  { path: '/login', component: Login },
  { path: '/signup', component: SignUp },
  { path: '*', redirect: '/home' }
]

const router = new VueRouter({ routes })

const app = new Vue({
  el: '#app',
  router
})
