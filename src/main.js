import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueMaterial)

import { routes } from './routes';

const router = new VueRouter({ routes, mode: 'history' });

const app = new Vue({
  el: '#app',
  router, 
  render: h => h(App)
})
