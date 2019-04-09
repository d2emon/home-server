import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import HelloWorld from '@/views/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      name: 'HelloWorld',
      component: Full,
      children: [
        {
          path: 'index',
          name: 'Index',
          component: HelloWorld
        }
      ]
    }
  ]
})
