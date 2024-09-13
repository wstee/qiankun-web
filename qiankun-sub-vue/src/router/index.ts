import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView/HomeView.vue'
import NotFound from '@/views/NotFound/NotFound.vue'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页',
    },
    component: HomeView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: {
      title: '404',
    },
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/app/app-vue3/' : '/'),
  routes,
});
router.beforeResolve((to) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = import.meta.env.VITE_TITLE + '-' + to.meta.title;
  } else {
    document.title = import.meta.env.VITE_TITLE;
  }
});
export default router;
