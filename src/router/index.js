import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'testField',
    component: () => import( /* webpackChunkName: "about" */ '@/components/testField.vue')
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import( /* webpackChunkName: "about" */ '@/plugins/editor.vue')
  },
  {
    path: '/helloWorld',
    name: 'helloWorld',
    component: () => import( /* webpackChunkName: "about" */ '@/components/HelloWorld.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
