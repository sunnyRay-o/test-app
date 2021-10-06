import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/reset.css';
import './assets/css/main.css';

Vue.config.productionTip = false;

Vue.directive('documentClick', {
  bind(el, binding) {
    document.addEventListener('click', binding.value, false);
  },
});

Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
