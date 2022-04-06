import Vue from 'vue'
import Vuex from 'vuex'

//1.安装vuex
Vue.use(Vuex);
//2.创建store对象
const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('token'),
    refreshToken: localStorage.getItem('refresh'),
    userID: "", //Login.vue
    user: {id: "", username: "", email: ""}, //Menus.vue
    coins: {id: "", coin: "", user_id: ""}, // searchHeader.vue
    today: "",
    order: {id: "", coin: "", rewards: "", qr: "", user: ""}, //order.vue
  },
  mutations: {
    //将token保存到localStorage里，token表示登陆状态
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
      // console.log('store token: ' + token);
    },
    refreshToken(state, refresh) {
      state.refreshToken = refresh;
      localStorage.setItem('refresh', refresh);
      // console.log('refresh: ' + refresh);
    },
    logout(state) {
      state.token = null;
      state.refreshToken = null;
      localStorage.removeItem('token');
      localStorage.removeItem('refresh');
      sessionStorage.removeItem('store');
    },
  },
});
//3.暴露store对象
export default store;
