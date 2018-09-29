import Vue from 'vue'
import Router from 'vue-router'
import Present from '@/views/Public/Present'
import Interface from '@/views/Inside/Interface'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Overview',
      component: Present
    },
    {
      path: '/home',
      name: 'home',
      component: Interface
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/Frage.vue')
    }
  ]
})
