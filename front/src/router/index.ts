import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    /*
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    */
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/About.vue'),
    },
    {
      path: '/',
      redirect: '/index',
      name: 'HelloWorld',
      component: () => import('@/containers/Full.vue'),
      children: [
        {
          path: 'index',
          name: 'Index',
          component: () => import('@/views/HelloWorld.vue'),
        },
      ],
    },
    {
      path: '/torn',
      redirect: '/torn/index',
      name: 'HelloTorn',
      component: () => import('@/containers/Torn.vue'),
      children: [
        {
          path: 'index',
          name: 'IndexTorn',
          component: () => import('@/views/HelloTorn.vue'),
        },
      ],
    },

  ],
});
