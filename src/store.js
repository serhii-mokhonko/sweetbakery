import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import links from './store/links'
import goods from './store/goods'

export default new Vuex.Store({
  modules: {
    links, goods
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
