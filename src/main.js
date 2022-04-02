// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
// import './assets/bootstrap/css/bootstrap.min.css'
import './assets/bootstrap-4.6.1-dist/css/bootstrap.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //注册路由管理器
  components: {App},
  template: '<App/>',
  store, //注册状态管理器
})
//  路由判断登录 根据路由配置文件的参数
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requireAuth)) {  // 判断该路由是否需要登录权限
//     if (localStorage.token) {  // 判断当前的token是否存在 ； 登录存入的token
//       next();
//     } else {
//       console.log('Login required');
//       next({
//         path: '/',
//         query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       })
//     }
//   } else {
//     next();
//   }
// });
