import Vue from 'vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import * as firebase from 'firebase/app'
import App from './App.vue'

Vue.config.productionTip = false

export const event = new Vue()

const firebaseConfig = {
  apiKey: "AIzaSyDdbtwV1suTNT1XTfEanBxgIDp-k51NZIQ",
  authDomain: "sweet-bakery-shop.firebaseapp.com",
  databaseURL: "https://sweet-bakery-shop.firebaseio.com",
  projectId: "sweet-bakery-shop",
  storageBucket: "sweet-bakery-shop.appspot.com",
  messagingSenderId: "26211045068",
  appId: "1:26211045068:web:4951bd5c8d44a60df43c69"
};

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp(firebaseConfig)
  }
}).$mount('#app')
