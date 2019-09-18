import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './store/user'
import links from './store/links'
import goods from './store/goods'

export default new Vuex.Store({
  modules: {
    user, links, goods
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  }
})
