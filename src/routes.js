import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/home',
    name: 'home',
    meta: { title: 'Home' },
    component: () => import('./views/Home.vue')
  },
  {
    path: '/route',
    name: 'route',
    meta: { title: 'Route' },
    component: () => import('./views/RouteMap.vue')
  },
  { path: '/:path(.*)', component: NotFound },
]
