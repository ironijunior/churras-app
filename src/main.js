import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import Vuetify from 'vuetify'
import '../node_modules/vuetify/dist/vuetify.min.css';

Vue.use(Vuetify)
Vue.use(VueResource)
Vue.use(VueRouter)

import { routes } from './routes';

const router = new VueRouter({ routes, mode: 'history' });

const app = new Vue({
  el: '#app',
  router, 
  render: h => h(App)
})
