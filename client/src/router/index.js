import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage/roots/HomePage.vue';
import Detail from '@/views/Casas/Detail.vue';
import Casas from '@/views/Casas/Casas.vue';
import Admin from '@/views/Admin/Admin.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/casas',
      name: 'casas',
      component: Casas
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    },
  ],
  scrollBehavior(to, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
})

export default router