import { createRouter, createWebHistory } from 'vue-router'
import FavoriteView from '@/views/FavoriteView.vue'
import PeoplesView from '@/views/PeoplesView.vue'
import PeoplesProfileView from '@/views/PeoplesProfileView.vue'
import App from '@/App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Главная',
      component: App
    },
    {
      path: '/peoples',
      name: 'peoples',
      component: PeoplesView
    },
    {
      path: '/peoples/:id',
      name: 'peoples-profile',
      component: PeoplesProfileView
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: FavoriteView
    }
  ]
})

export default router
