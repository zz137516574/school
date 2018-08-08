// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import axios from 'axios';
import iView from 'iview';
import * as service from './api/service';
import router from './router/config';
import Vuex from 'vuex';
import store from './store';
import * as types from './store/types';
import 'iview/dist/styles/iview.css';
import './theme/index.less';
import './assets/css/common.css';
import env from '../config/env';

import '../static/ueditor/ueditor.config.js'
import '../static/ueditor/ueditor.all.js'
import '../static/ueditor/lang/zh-cn/zh-cn.js'
import '../static/ueditor/ueditor.parse.js'


// import
import VideoPlayer  from 'vue-video-player';
// mount with global

const config = require('../config');

Vue.use(VideoPlayer);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(store);
Vue.use(iView);


// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.axios = axios;
Vue.prototype.service = service;
Vue.prototype.types = types;
Vue.prototype.store = store;
Vue.prototype.iView = iView;

Vue.config.productionTip = false;

/**
 * 动态配置可变参数
 */
Vue.prototype.getConfigJson = function () {
  if (env == 'development') {
    // Vue.prototype.baseURL = config.conf.baseURL;
    // Vue.prototype.basePath = config.conf.basePath;
    // axios.defaults.baseURL = config.conf.baseURL;
    // axios.defaults. config.conf = config.conf.timeout;
    setConfigData(config.conf)
  } else {
    fetch("serverConfig.json")
      .then((result) => {
        // Vue.prototype.baseURL = result.body.baseURL;
        // Vue.prototype.basePath = result.body.basePath;
        // axios.defaults.baseURL = result.body.baseURL;
        // axios.defaults.timeout = result.body.timeout;
        setConfigData(result.body)
      })
      .catch((error) => {
        console.log(env +' ConfigData 错误信息 ：' + JSON.stringify(error))
      });
    fetch("../serverConfig.json")
      .then((result) => {
        // Vue.prototype.baseURL = result.body.baseURL;
        // Vue.prototype.basePath = result.body.basePath;
        // axios.defaults.baseURL = result.body.baseURL;
        // axios.defaults.timeout = result.body.timeout;
        setConfigData(result.body)
      })
      .catch((error) => {
        console.log(env +' ConfigData 2错误信息 ：' + JSON.stringify(error))
      });
  }
}

const setConfigData =(config) => {
  console.log(env + " ConfigData is : " + JSON.stringify(config))
  // Vue.prototype.baseURL = config.baseURL;
  // Vue.prototype.basePath = config.basePath;
  // axios.defaults.baseURL = config.baseURL;
  // axios.defaults.timeout = config.timeout;
}


// store,
//   axios,
//   types,
//   service,
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  types,
  template: '<App/>',
  components: {App}
});

router.beforeEach((to, from, next) => {
  // console.log("-------------1" + to.meta.requireAuth)
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (store.state.token) {  // 通过vuex state获取当前的token是否存在
      next();
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    // console.log("-------------2" + to.fullPath);
    next();
  }
})
