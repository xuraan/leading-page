import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/VersionsView.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FaqsView.vue')
    },
    {
      path: '/features',
      name: 'features',
      component: () => import('../views/FeaturesView.vue')
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/versions',
      name: 'versions',
      component: () => import('../views/VersionsView.vue')
    }
  ]
})

export default router
