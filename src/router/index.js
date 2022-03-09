import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('../views/Login')
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: () => import('../views/SignUp')
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('../views/Index'),
      children: [
        {
          path: 'task',
          name: 'Task',
          component: () => import('../views/Task/Task')
        },
        {
          path: 'reward',
          name: 'Reward',
          component: () => import('../views/Reward/Reward'),
        },
        {
          path: 'rewdetail',
          name: 'RewDetail',
          component: () => import('../views/Reward/RewDetail'),
        },
        {
          path: 'addtask',
          name: 'AddTask',
          component: () => import('../views/AddTask/AddTask')
        },
        {
          path: 'addreward',
          name: 'AddReward',
          component: () => import('../views/AddReward/AddReward'),
        },
        {
          path: 'addrecom',
          name: 'AddRecom',
          component: () => import('../views/AddReward/AddRecom')
        },
        {
          path: 'recdetail',
          name: 'RecDetail',
          component: () => import('../views/Reward/RecDetail'),
        },
        {
          path: 'settings',
          name: 'Settings',
          component: () => import('../views/Settings/Settings')
        },
        {
          path: 'notice',
          name: 'Notice',
          component: () => import('../views/Notice/Notice')
        },
      ]
    }
  ]
})
