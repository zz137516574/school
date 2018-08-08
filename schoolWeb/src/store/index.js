import Vuex from 'vuex';
import Vue from 'vue';
import * as types from './types';
import iView from 'iview';

Vue.use(Vuex);
Vue.use(iView);

export default new Vuex.Store({
  state: {
    user: {},
    token: null,
    // token: null,
    menus: null,
    topMenu: 'news',
    breadListState:[
      {name:'首页',path:'/'}
    ]
  },
  mutations: {
    [types.LOGIN]: (state, data) => {
      localStorage.token = JSON.stringify(data);
      state.token = data.token;
    },
    [types.LOGOUT]: (state) => {
      localStorage.removeItem('login');
      localStorage.removeItem('menus');
      state.token = null;
      state.menus = null;
    },
    [types.GET_MENUS]: (state, data) => {
      localStorage.menus = JSON.stringify(data);
      state.menus = data;

    },
    [types.NET_START]: (state) => {
    },
    [types.NET_FINISH]: (state) => {
    },
    [types.NET_ERROR]: (state, data) => {
      console.log('============== ' + data);
    },
  },
  getters: {
  },
  actions: {}
});
