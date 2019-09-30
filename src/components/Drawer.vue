<template>
<v-navigation-drawer
    v-model="drawer"
    width="75%"
    fixed
>
    <v-list>
      <v-list-item
        v-for="(link, id) in links"
        :key=id
        :to="link.href"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ link.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
</v-navigation-drawer>
</template>

<script>
import {event} from '../main';

export default {
    data () {
      return {
        drawer: false,
        links: null
      }
    },
    computed: {
    },
    created () {
        event.$on('changeDrawer', () => this.drawer = !this.drawer)
        this.links = this.$store.getters.getLinks
    }
}
</script>

<style scoped>
.v-navigation-drawer {
  margin-top: 40px; 
}
</style>