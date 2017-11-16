import Home from './components/Home.vue';
import Login from './components/Login.vue';
import SignUp from './components/SignUp.vue';

export const routes = [

    { path: '', component: Login, titulo: 'Login' },
    { path: '/home', component: Home, titulo: 'Home' }, 
    { path: '/signUp', component: SignUp, titulo: 'SignUp' }
];