import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/views/Landing.vue'
import Login from '@/views/Login.vue'
import createAccount from '@/views/createAccount.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path:'/login',
    name: 'Login',
    component: Login
  },
  {
    path:'/create',
    name: 'createAccount',
    component: createAccount
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router