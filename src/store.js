import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './store/user'
import links from './store/links'
import goods from './store/goods'
import loader from './store/loader'
import shoppingcard from './store/shoppingCard'

export default new Vuex.Store({
  modules: {
    user, 
    links, 
    goods, 
    loader,
    shoppingcard
  }
})
