import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    position: {},
    username: '',
  },
  mutations: {
    setPosition(state, pos) {
      state.position = pos;
    },
    setUsername(state, name) {
      state.username = name;
    },
  },
  actions: {
    setPosition({ commit }, pos) {
      // 请求后端接口获取地理位置信息;
      commit('setPosition', pos);
    },
  },
  modules: {
  },
});
