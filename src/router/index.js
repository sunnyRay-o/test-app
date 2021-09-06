import Vue from 'vue';
import VueRouter from 'vue-router';
import Default from '../views/Default.vue';
import Blank from '../views/Blank.vue';
import Home from '../pages/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Default',
    component: Default,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
      },
    ],
  },
  {
    path: '/blank',
    name: 'Blank',
    component: Blank,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
