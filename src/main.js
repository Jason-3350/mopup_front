// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";
// import './assets/bootstrap/css/bootstrap.min.css'
import './assets/bootstrap-4.6.1-dist/css/bootstrap.min.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //注册路由管理器
  components: { App },
  template: '<App/>',
  store, //注册状态管理器
})
