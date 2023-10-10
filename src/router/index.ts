import { createRouter, createWebHistory } from 'vue-router'
import Peoples from '@/views/peoples/Peoples.vue'
import Favorite from '@/views/Favorite.vue'
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
      component: Peoples
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: Favorite
    }
  ]
})

export default router
