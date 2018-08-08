/**
 * Created by superman on 17/2/16.
 * http配置
 */

import axios from 'axios';
import store from '../store';
import * as types from '../store/types';
import qs from 'qs';
import router from '../router/config';

// axios 配置
// axios.defaults.timeout = 30000;
// axios.defaults.baseURL = baseUrl;
axios.defaults.baseURL = 'http://120.78.13.237:8080/schoolapi-1.0.0/';
// axios.defaults.baseURL = 'http://192.168.2.76:8080/ds-callnumber/app/api/v1/';

// axios.defaults.baseURL = 'http://192.168.2.91/';
// axios.defaults.responseType = 'JSON';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// axios.defaults.headers.post['Accept'] = 'application/json;charset=UTF-8';
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';


// http request 拦截器
axios.interceptors.request.use(
  config => {
    var token = localStorage.token;   //localStorage.token
    // var token = 'a5b8f17a37d9ea7316204de0e7399adb'   //localStorage.token  JSON.parse(window.localStorage.getItem('token')).token;
    // console.log('token is ' + JSON.parse(token).token)
    if (token !== null && token !== undefined) {
      // config.headers.token = `${JSON.parse(token)}`;
      config.headers.token = JSON.parse(token);
    }
    // console.log('=============request config is ===========' + JSON.stringify(config))
    store.commit(types.NET_START);
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    // console.log('=============response data is ===========' + JSON.stringify(response))
    if (response.data.code === 0) {
      store.commit(types.NET_FINISH);
      return response.data;
    }
    // 数据返回异常
    if (response.data.code === 401) {
      router.replace('login');
    }
    store.commit(types.NET_ERROR, response.data.msg);
    return Promise.reject(response.data.msg);
  },
  error => {
    // store.commit(types.NET_ERROR, response.data.msg);

    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          // this.$message.error('token失效，请重新登陆');
          console.log('401 前的path ： ' + this.$route.path)
        // store.commit(types.LOGOUT);
        // this.$router.replace('');
      }
    }

    return Promise.reject(error.response.data);
  });

function post(url, data) {
  if (data === undefined) {
    return axios.post(url);
  }
  return axios.post(url, data);

  // var params = new URLSearchParams();
  // if (data == null) {
  //   return axios.post(url);
  // }
  // Object.keys(data).forEach(key => {
  //   params.append(key, data[key]);
  // })
  // return axios.post(url, params);
}

function get(url, data) {
  if (data === undefined) {
    return axios.get(url);
  }
  if (Object.prototype.toString.call(data) !== '[object Object]') {
    return axios.get(url + data);
    ;
  }
  return axios.get(url + '?' + qs.stringify(data));
}

export {
  axios,
  get,
  post,
};
