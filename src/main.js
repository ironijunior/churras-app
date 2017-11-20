import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import Vuetify from 'vuetify'
import '../node_modules/vuetify/dist/vuetify.min.css';
import firebase from 'firebase'
import { routes } from './routes';

Vue.use(Vuetify)
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({ routes, mode: 'history' });
router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) {
    next('login')
  } else if(!requiresAuth && currentUser) {
    next('home')
  } else {
    next()
  }
});

let app;
var config = {
    apiKey: "AIzaSyDsomwXBi6FJlFDDLHls6dYbzwZDeRrkfo",
    authDomain: "churras-app.firebaseapp.com",
    databaseURL: "https://churras-app.firebaseio.com",
    projectId: "churras-app",
    storageBucket: "",
    messagingSenderId: "803414096922"
}

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if(!app) {
    app = new Vue({
      el: '#app',
      router,
      render: h => h(App)
    })
  }
});
