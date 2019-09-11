<template>
<v-app>
  <app-nav-bar></app-nav-bar>
  
  <router-view/>
  
  <app-drawer></app-drawer>
  <app-footer></app-footer>
  
</v-app>
</template>

<script>
import Nav from './components/Navbar'
import Drawer from './components/Drawer'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    appNavBar: Nav,
    appFooter: Footer,
    appDrawer: Drawer
  }
}
</script>
