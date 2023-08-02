import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginView from '@/views/auth/LoginView.vue';
import RegisterView from '@/views/auth/RegisterView.vue';

import HomeView from '@/views/pages/home/HomeView.vue';
import AboutView from '@/views/pages/about/AboutView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    meta: { title: 'Home' },
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView,
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
