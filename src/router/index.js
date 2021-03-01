import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from "../store";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresLoggedOut: true
    }
  },
  {
    path: '/tours',
    name: 'Tours',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tours.vue'),
    meta: {
      requiresLoggedIn: true
    }
  },
  {
    path: '/newTour',
    name: 'NewTour',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewTourView.vue'),
    meta: {
      requiresLoggedIn: true,
      requiresGuideOrAdmin: true
    }
  },
  {
    path: '/myTours',
    name: 'MyTours',
    component: () => import(/* webpackChunkName: "about" */ '../views/MyTours.vue'),
    meta: {
      requiresLoggedIn: true
    }
  },
  {
    path: '/guides',
    name: 'Guides',
    component: () => import(/* webpackChunkName: "about" */ '../views/Guides.vue'),
    meta: {
      requiresLoggedIn: true
    }
    
  },
  {
    path: '/tourDetails/:id',
    name: 'TourView',
    component: () => import(/* webpackChunkName: "about" */ '../views/TourView.vue'),
    meta: {
      requiresLoggedIn: true
    }
  },
  {
    path: '/editTour/:id',
    name: 'EditTour',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditTour.vue'),
    meta: {
      requiresLoggedIn: true,
      requiresGuideOrAdmin: true
    }
  },
  {
    path: '/guideDetails/:id',
    name: 'GuideView',
    component: () => import(/* webpackChunkName: "about" */ '../views/GuideView.vue'),
    meta: {
      requiresLoggedIn: true
    }
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registration.vue'),
    meta: {
      requiresLoggedIn: true,
      requiresAdmin: true
    }
  },
  {
    path: '/editUser/:id',
    name: 'EditUser',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditUser.vue'),
    meta: {
      requiresLoggedIn: true,
      requiresAdmin: true
    }
  },
  {
    path: '/allUsers',
    name: 'AllUsers',
    component: () => import(/* webpackChunkName: "about" */ '../views/AllUsers.vue'),
    meta: {
      requiresLoggedIn: true,
      requiresAdmin: true
    }
  },
  {
    path: '/allGuides',
    name: 'AllGuides',
    component: () => import(/* webpackChunkName: "about" */ '../views/AllGuides.vue'),
    meta: {
      requiresLoggedIn: true,
      requiresAdmin: true
    }
  },
  {
    path: '/userDetails',
    name: 'UserDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserDetails.vue'),
    meta: {
      requiresLoggedIn: true
    }
  },
  {
    path: '/changePassword',
    name: 'ChangePassword',
    component: () => import(/* webpackChunkName: "about" */ '../views/ChangePassword.vue'),
    meta: {
      requiresLoggedIn: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresLoggedOut)) {
    if (!store.getters['authentication/isLoggedIn']) {
      next()
      return
    }
    next("/tours")
  } else {
    next()
  }
  if(to.matched.some(record => record.meta.requiresLoggedIn)) {
    if (store.getters['authentication/isLoggedIn']) {
      if(to.matched.some(record => record.meta.requiresGuideOrAdmin)) {
        if (store.getters['authentication/getRole']=="ADMIN" || store.getters['authentication/getRole']=="GUIDE") {
          next()
          return
        }
        next('/tours')
      }
      if(to.matched.some(record => record.meta.requiresAdmin)) {
        if (store.getters['authentication/getRole']=="ADMIN") {
          next()
          return
        }
        next('/tours')
      }
      next()
      return
    }
    next('/')
  } else {
    next()
  }
})

export default router
