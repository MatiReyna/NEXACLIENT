import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage/roots/HomePage.vue';
import Admin from '@/views/Admin/Admin.vue';
import Detail from '@/views/Casas/Detail.vue';
import Casas from '@/views/Casas/Casas.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
    }
  ]
})

export default router
