import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import PageAsObject from '@/pages/PageAsObject.vue'
import PageAsClass from '@/pages/PageAsClass.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'PageAsObject',
      component: PageAsObject,
      meta: {
        title: 'PageAsObject'
      }
    },
    {
      path: '/test',
      name: 'PageAsClass',
      component: PageAsClass,
      meta: {
        title: 'PageAsClass'
      }
    }
  ],
  mode: 'history',
  linkActiveClass: 'is-active-parent',
  linkExactActiveClass: 'is-active',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }

    if (!to.meta.saveScrollPosition || !from.meta.saveScrollPosition) {
      return { x: 0, y: 0 }
    }
  }
})

// router.beforeEach((to, from, next) => {
//   next()
// })

export default router
