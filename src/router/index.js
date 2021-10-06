import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import Default from '../views/Default.vue';
import Blank from '../views/Blank.vue';
import Home from '../pages/Home.vue';
import ChangeCity from '../pages/ChangeCity.vue';
import Product from '../pages/Product.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import Detail from '../pages/Detail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Default',
    component: Default,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
      },
      {
        path: 'changeCity',
        name: 'ChangeCity',
        component: ChangeCity,
      },
      {
        path: '/s/:name',
        name: 'Product',
        component: Product,
      },
      {
        path: 'product/:id',
        name: 'Detail',
        component: Detail,
      },
    ],
  },
  {
    path: '/blank',
    name: 'Blank',
    component: Blank,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login,
      },
      {
        path: 'register',
        name: 'Register',
        component: Register,
      },
    ],
  },
];
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  if (from.name === 'Home' && to.name === 'Product') {
    return store.state.username ? next() : next({ name: 'Login' });
  }
  return next();
});
export default router;
