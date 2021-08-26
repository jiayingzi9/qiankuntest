/*
 * @Author: your name
 * @Date: 2021-08-25 16:37:00
 * @LastEditTime: 2021-08-25 17:47:10
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \qiankun\qiankun-vue\src\router\index.ts
 */
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  base:'vue',
  routes
})

export default router
