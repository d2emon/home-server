import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import('@/views/Layout.vue'),
  },
  {
    path: '/styles',
    name: 'Styles',
    component: () => import('@/views/Layout.vue'),
  },
  {
    path: '/more',
    name: 'More',
    component: () => import('@/views/Layout.vue'),
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/gallery-2',
    name: 'Gallery',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/gallery-3',
    name: 'Gallery',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/gallery-4',
    name: 'Gallery',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/cherry',
    name: 'Cherry',
    component: () => import('@/views/Cherry.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
