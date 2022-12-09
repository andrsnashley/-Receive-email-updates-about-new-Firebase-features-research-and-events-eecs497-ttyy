import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/views/Landing.vue'
import Login from '@/views/Login.vue'
import createAccount from '@/views/createAccount.vue'
import Explore from '@/views/Explore.vue'
import Recipe from '@/views/Recipe.vue'

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
  },
  {
    path:'/explore',
    name: 'Explore',
    component: Explore
  }, 
  {
    path:'/recipe',
    name: "Recipe",
    component: Recipe,
    // props: true
  }


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router