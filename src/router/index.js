import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import store from "../store";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/tours',
    name: 'Tours',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tours.vue')
  },
  {
    path: '/guides',
    name: 'Guides',
    component: () => import(/* webpackChunkName: "about" */ '../views/Guides.vue'),
    
  },
  {
    path: '/tourDetails',
    name: 'TourView',
    component: () => import(/* webpackChunkName: "about" */ '../views/TourView.vue')
  },
  {
    path: '/guideDetails',
    name: 'GuideView',
    component: () => import(/* webpackChunkName: "about" */ '../views/GuideView.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registration.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.right)) {
    if (store.getters['auth/isLoggedIn']) {
      next()
      return
    }
    next('/')
  } else {
    next()
  }
})

export default router
