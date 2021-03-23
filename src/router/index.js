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
    path: '/content',
    name: '/Content',
    component: () => import('@/views/content.vue'),
    children: [
      {
        path: 'css',
        name: 'css',
        meta: {
          title: 'css'
        },
        component: () => import(/* webpackChunkName: "about" */ '@/views/css/index.vue'),
        children: [
          {
            path: 'flex',
            name: 'flex',
            meta: {
              title: 'flex'
            },
            component: () => import(/* webpackChunkName: "about" */ '@/views/css/flex/index.vue'),
            children: [
              {
                path: 'shrink',
                name: 'shrink',
                meta: {
                  title: 'shrink'
                },
                component: () => import('@/views/css/flex/shrink.vue')
              },
              {
                path: 'grow',
                name: 'grow',
                meta: {
                  title: 'grow'
                },
                component: () => import('@/views/css/flex/grow.vue')
              },
              {
                path: 'basis',
                name: 'basis',
                meta: {
                  title: 'basis'
                },
                component: () => import('@/views/css/flex/basis.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'html5',
        name: 'html5',
        meta: {
          title: 'html5'
        },
        component: () => import('@/views/html5/index.vue'),
        children: [
          {
            path: 'upload',
            name: 'upload',
            meta: {
              title: 'upload'
            },
            component: () => import('@/views/html5/upload/index.vue'),
            children: [
              {
                path: 'drop',
                name: 'drop',
                meta: {
                  title: 'drop'
                },
                component: () => import('@/views/html5/upload/drop.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'js',
        name: 'js',
        meta: {
          title: 'js'
        },
        component: () => import('@/views/js/index.vue'),
        children: [
          {
            path: 'chain',
            name: 'chain',
            meta: {
              title: '原型链'
            },
            component: () => import('@/views/js/chain/index.vue'),
            children: [
              {
                path: 'chain',
                name: 'chain',
                meta: {
                  title: 'chain'
                },
                component: () => import('@/views/js/chain/chain.vue')
              }
            ]
          },
          {
            path: 'object',
            name: 'object',
            meta: {
              title: 'object'
            },
            component: () => import('@/views/js/object/index.vue'),
            children: [
              {
                path: 'defineProperty',
                name: 'defineProperty',
                meta: {
                  title: 'defineProperty'
                },
                component: () => import('@/views/js/object/defineProperty.vue')
              },
              {
                path: 'proxy',
                name: 'proxy',
                meta: {
                  title: 'proxy'
                },
                component: () => import('@/views/js/object/proxy.vue')
              },
              {
                path: 'others',
                name: 'others',
                meta: {
                  title: 'others'
                },
                component: () => import('@/views/js/object/others.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'vue',
        name: 'vue',
        meta: {
          title: 'vue'
        },
        component: () => import('@/views/vue/index.vue'),
        children: [
          {
            path: 'vue',
            name: 'vue',
            meta: {
              title: 'vue'
            },
            component: () => import('@/views/vue/vue/index.vue'),
            children: [
              {
                path: 'onAPI',
                name: 'onAPI',
                meta: {
                  title: 'onAPI'
                },
                component: () => import('@/views/vue/vue/onAPI.vue')
              }
            ]
          },
          {
            path: 'router',
            name: 'router',
            meta: {
              title: 'router'
            },
            component: () => import('@/views/vue/router/index.vue'),
            children: [
              {
                path: 'beforeRouteEnter',
                name: 'beforeRouteEnter',
                meta: {
                  title: 'beforeRouteEnter'
                },
                component: () => import('@/views/vue/router/beforeRouteEnter.vue')
              }
            ]
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 生成通用的 routeTree 给各种地方使用 比如面包屑等
const content = (routes.find(item => item.path === '/content')).children
function getRouteTree(routes) {
  let res = []
  routes.forEach(item => {
    if (!item.children) {
      res.push({
        title: item.meta.title,
        name: item.name
      })
    } else {
      res.push({
        title: item.meta.title,
        name: item.name,
        children: getRouteTree(item.children)
      })
    }
  })
  return res
}
const routeTree = getRouteTree(content)

export { routeTree } 

export default router
