import { createRouter, createWebHistory } from 'vue-router'
import PayView from '../views/PayView.vue'
import HomeView from '../views/HomeView.vue'
import CreateAccountView from '../views/CreateAccountView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pay',
    name: 'pay',
    component: PayView
  },
  {
    path: '/create-account',
    name: 'createaccount',
    component: CreateAccountView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
