import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'

Vue.use(Router)

function guard(to, from, next) {
  if (store.getters.getUser) {
    next()
  } else {
    next({ name: 'login' })
  }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./views/Home'),
      name: 'home'
    },
    {
      path: '/about',
      component: () => import('./views/About'),
      name: 'about'
    },
    {
      path: '/contacts',
      component: () => import('./views/Contacts'),
      name: 'contacts'
    },
    {
      path: '/shopping-card',
      component: () => import('./views/ShoppingCard'),
      name: 'shopping-card'
    },
    {
      path: '/goods/:id',
      component: () => import('./views/Goods'),
      name: 'goods'
    },
    {
      path: '/login',
      component: () => import('./views/Admin/Login'),
      name: 'login'
    },
    {
      path: '/admin/add-new-goods',
      component: () => import('./views/Admin/AddNewGoods'),
      name: 'newGoods',
      beforeEnter: guard
    },
    {
      path: '/admin/goods',
      component: () => import('./views/Admin/EditGoods'),
      name: 'editGoods',
      beforeEnter: guard
    },
    {
      path: '/admin/edit-goods/:id',
      component: () => import('./views/Admin/EditGoodsById'),
      name: 'editGoodsById',
      beforeEnter: guard
    },
  ]
})
