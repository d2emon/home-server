import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Index.vue'),
  },
  {
    path: '/torn',
    name: 'Torn',
    component: () => import('@/views/Torn.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue'),
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
        component: () => import('@/views/Portfolio.vue'),
      },
      {
        path: '/portfolio/:itemId',
        name: 'PortfolioItem',
        component: () => import('@/views/PortfolioItem.vue'),
      },
      {
        path: '/gallery-:cols',
        name: 'Gallery',
        component: () => import('@/views/Gallery.vue'),
      },
      {
        path: '/blog',
        name: 'Blog',
        component: () => import('@/views/Blog.vue'),
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
    ],
  },
  {
    path: '/music',
    name: 'Music',
    component: () => import('@/music/views/Music.vue'),
    children: [
      {
        path: '',
        redirect: '/music/search',
      },
      {
        path: 'search',
        name: 'Search',
        component: () => import('@/music/views/Search.vue'),
      },
      {
        path: 'search/:search',
        name: 'SearchedSongs',
        component: () => import('@/music/views/Songs.vue'),
      },
      {
        path: 'genres',
        name: 'Genres',
        component: () => import('@/music/views/Genres.vue'),
      },
      {
        path: 'genres/:genre',
        name: 'GenreSongs',
        component: () => import('@/music/views/Songs.vue'),
      },
      {
        path: 'misheard',
        name: 'Misheard',
        component: () => import('@/music/views/Misheard.vue'),
      },
      {
        path: 'instruments',
        name: 'Instruments',
        component: () => import('@/music/views/Instruments.vue'),
      },
      {
        path: 'instruments/:instrument',
        name: 'Instrument',
        component: () => import('@/music/views/Instrument.vue'),
      },
      {
        path: 'instruments/:instrument/:page.md',
        name: 'Instrument',
        component: () => import('@/music/views/Instrument.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
