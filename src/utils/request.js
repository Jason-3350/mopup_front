import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import store from "../store";

const instance = axios.create({
  // baseURL: "https://mopupapi.herokuapp.com",
  // timeout: 10000,
  baseURL: "http://127.0.0.1:8000",
  timeout: 20000,
})


// 请求拦截器，发送请求时添加token
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    console.log('请求拦截器');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
)

// npm install axios-auth-refresh --save
// Make a call. If it returns a 401 error, the refreshAuthLogic will be run,
// Function that will be called to refresh authorization
// let refresh = localStorage.getItem('refresh')
const refreshAuthLogic = failedRequest => instance.post('/token/refresh', {refresh: localStorage.getItem('refresh')}).then(tokenRefreshResponse => {
  // localStorage.setItem('token', tokenRefreshResponse.data.access);
  store.commit('setToken',tokenRefreshResponse.data.access);
  failedRequest.response.config.headers['Authorization'] = 'Bearer ' + tokenRefreshResponse.data.access;
  return Promise.resolve();
});

// Instantiate the interceptor
createAuthRefreshInterceptor(instance, refreshAuthLogic);

export default instance;
