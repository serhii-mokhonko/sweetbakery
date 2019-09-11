import Vue from 'vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import App from './App.vue'

Vue.config.productionTip = false

export const event = new Vue()

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
