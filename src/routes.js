import Home from './components/Home.vue';
import Login from './components/Login.vue';
import SignUp from './components/SignUp.vue';
import NewEvent from './components/NewEvent.vue';

export const routes = [

    { path: '*', redirect: '/login' },
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login, titulo: 'Login' },
    { path: '/signUp', component: SignUp, titulo: 'SignUp' },
    { path: '/home', component: Home, titulo: 'Home', meta: {requiresAuth: true} },
    { path: '/event', component: NewEvent, titulo: 'New Event', meta: {requiresAuth: true} },
];
