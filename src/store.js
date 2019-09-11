import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false
  },
  mutations: {
    setDrawer (state, payload) {
      state.drawer = payload
    }
  },
  actions: {
    changeDrawer ({commit, getters}) {
      if(!getters.drawer){
        commit("setDrawer", true)
      }else{
        commit("setDrawer", false)
      }
    }
  },
  getters: {
    drawer (state) {
      return  state.drawer
    }
  }
})
