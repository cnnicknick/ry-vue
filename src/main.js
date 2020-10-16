import Vue from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { Button } from "ant-design-vue";
import App from './App.vue'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = 'http://172.16.89.91/portal-ctx';
// http request 拦截器
axios.interceptors.request.use(
  config => {
      // if (stoken) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
          config.headers['X-Auth-Token'] = `27bd581e-83ee-4a6f-b615-50835c406a4b`;
      // }
      return config;
  },
  err => {
      return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
      return response;
  },
  error => {
      if (error.response) {
          switch (error.response.status) {
              case 401:
                  // 返回 401 清除token信息并跳转到登录页面
                  
                  router.replace({
                      path: 'login',
                      query: {redirect: router.currentRoute.fullPath}
                  })
          }
      }
      return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  });

Vue.prototype.$ajax = axios;
Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(Button);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

Vue.directive('title', {
  inserted: function (el) {
    document.title = el.dataset.title
  }
})