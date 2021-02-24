import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/testField',
  //   name: 'testField',
  //   component: () => import( /* webpackChunkName: "about" */ '@/components/testField.vue')
  // },
  {
    path: '/css',
    name: 'Css',
    component: () => import(/* webpackChunkName: "about" */ '@/views/css/index.vue'),
    children: [
      {
        path: 'flex',
        name: 'Flex',
        component: () => import(/* webpackChunkName: "about" */ '@/views/css/flex/index.vue'),
        children: [
          {
            path: 'shrink',
            name: 'Shrink',
            component: () => import('@/views/css/flex/shrink.vue')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
