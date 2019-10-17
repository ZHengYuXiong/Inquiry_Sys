/*
*路由器对象模块
**/

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home'
import Grades from '../pages/Grades/Grades'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 所以路由
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/grades',
      component: Grades,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
