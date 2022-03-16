import Vue from 'vue'
import Vuex from 'vuex'
//1.安装vuex
Vue.use(Vuex);
//2.创建store对象
const store = new Vuex.Store({
  state: {
    // 所有待办目标
    todos: [
      {id: "001", event: "Running", location: "Running Building", start: "17:00", end: "18:00", date: "2022-01-01"},
    ],
    // 所有普通奖励
    allRewards: [
      {id: 1, coin: 5, name: "Aberdeen Books"},
      {id: 2, coin: 10, name: "Supermarket"},
      {id: 3, coin: 15, name: "Starbucks"},
    ],
    // 推荐奖励
    // recoms: [
    //   {id: 1, coin: 20, name: "Collaboration with business"},
    //   {id: 2, coin: 10, name: "Sport Village"},
    // ],
    // 保存用户名
    // user: {username: 'Dianna J. Thompson'},
    user: {},
  },
  mutations: {
    // 定义方法添加新的todo
    addTodo(state, obj) {
      state.todos.push(obj);
    },
    // 删除现有的事件
    removeTodo(state) {
      // console.log(state.todos[id])
      state.todos.pop();
    },
    // 添加普通奖励
    addReward(state, obj) {
      state.allRewards.push(obj);
    },
    // 添加推荐奖励
    addRecom(state, obj) {
      state.recoms.push(obj);
    },
    // 修改用户名
    updateUser(state, userObj) {
      state.user = userObj
    }
  }
});
//3.暴露store对象
export default store;
