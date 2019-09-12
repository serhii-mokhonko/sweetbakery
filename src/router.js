import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', component: () => import ('./views/Home'), name: 'home'},
    {path: '/about', component: () => import ('./views/About'), name: 'about'},
    {path: '/contacts', component: () => import ('./views/Contacts'), name: 'contacts'},
    {path: '/shopping-card', component: () => import ('./views/ShoppingCard'), name: 'shopping-card'},
    {path: '/goods/:id', component: () => import ('./views/Goods'), name: 'goods'},
  ]
})
