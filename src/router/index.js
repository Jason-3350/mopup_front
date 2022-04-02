import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router = new Router({
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
      meta:{
        requireAuth: true,  // 判断是否需要登录
      },
      children: [
        {
          path: 'task',
          name: 'Task',
          component: () => import('../views/Task/Task'),
        },
        {
          path: 'reward',
          name: 'Reward',
          component: () => import('../views/Reward/Reward'),
        },
        {
          path: 'reward/rewdetail',
          name: 'RewDetail',
          component: () => import('../views/Reward/RewDetail'),
        },
        {
          path: 'addtask',
          name: 'AddTask',
          component: () => import('../views/AddTask/AddTask')
        },
        // {
        //   path: 'addreward',
        //   name: 'AddReward',
        //   component: () => import('../views/AddReward/AddReward'),
        // },
        // {
        //   path: 'addrecom',
        //   name: 'AddRecom',
        //   component: () => import('../views/AddReward/AddRecom')
        // },
        {
          path: 'reward/recdetail',
          name: 'RecDetail',
          component: () => import('../views/Reward/RecDetail'),
        },
        {
          path: 'order',
          name: 'Order',
          component: () => import('../views/Order/Order'),
        },
        {
          path: 'order/qrcode',
          name: 'QRCode',
          component: () => import('../views/Order/QRCode'),
        },
        {
          path: 'settings',
          name: 'Settings',
          component: () => import('../views/Settings/Settings'),
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

// 注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  const token = localStorage.token
  if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
    if (token) { // 通过vuex state获取当前的token是否存在
      next();
    } else {
      console.log('Login required')
      next({
        path: '/',
        // query: {redirect: to.fullPath} // need the login page to get data
      })
    }
  } else {
    next();
  }
})

export default router
