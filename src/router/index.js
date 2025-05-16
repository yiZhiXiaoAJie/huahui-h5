/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2020-12-27 20:10:38
 * @LastEditors: 马世洁 mashijiezuishuai@outlook.com
 * @LastEditTime: 2025-05-16 18:23:22
 * @FilePath: /vue-jd-h5/src/router/index.js
 */
import { createRouter, createWebHashHistory  } from 'vue-router'

const indexRouter = {
  path: '/',
  component: () => import('@/views/index'),
  redirect: '/index',
  children: []
}

const routes = [
  indexRouter,
  {
    path: '/nopermission',
    name: 'nopermission',
    meta: {
      index: 1
    },
    component: () => import('@/views/error/NoPermission')
  },
  {
    path: '/*',
    name: '404',
    meta: {
      index: 1
    },
    component: () => import('@/views/error/404')
  },
]

const routerContext = require.context('./modules', true, /\.js$/)
routerContext.keys().forEach(route => {
  const routerModule = routerContext(route)
  indexRouter.children = [...indexRouter.children, ...(routerModule.default || routerModule)]
})

export default createRouter({
  history: createWebHashHistory (process.env.BASE_URL),
  routes
})
