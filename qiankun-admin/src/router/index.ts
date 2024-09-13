import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView/HomeView.vue'
import NotFound from '@/views/NotFound/NotFound.vue'

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
    path: '/app/app-vue3/:pathMatch(.*)*',
    name: 'app-vue3',
    meta: {
    },
    component: () => import('@/components/SubContainer.vue'),
  },
  {
    path: '/app/app-react18/:pathMatch(.*)*',
    name: 'app-react18',
    meta: {
    },
    component: () => import('@/components/SubContainer.vue'),
  },
  {
    path: '/app/app-react18-vite/:pathMatch(.*)*',
    name: 'app-react18-vite',
    meta: {
    },
    component: () => import('@/components/SubContainer.vue'),
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
  history: createWebHistory(),
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
router.beforeEach((to, form, next) => {
  console.log(window.history, window.location)
  if (window.history.state === null) {
    history.replaceState({
      back: form.path,
      current: to.path,
      forward: null,
      position: NaN,
      replaced: false,
      scroll: null,
    }, window.location.hostname + to.path)
  }
  next()
})
export default router;
