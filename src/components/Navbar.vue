<template>
<v-app-bar
    color="red lighten-2"
    dense
    light
>
    <v-app-bar-nav-icon class="d-flex d-sm-none" @click="changeDrawer()"></v-app-bar-nav-icon>
    <v-toolbar-title>Sweet Bakery</v-toolbar-title>
    <div class="flex-grow-1"></div>
    <v-toolbar-items>
        <v-btn 
            text
            class="d-none d-sm-flex"
            v-for="(link, id) in links"
            :key=id
            :to="link.href"
        >
            <v-icon left>{{ link.icon }}</v-icon>
            {{ link.name }}
        </v-btn>
    </v-toolbar-items>
</v-app-bar>
</template>

<script>
import { event } from '../main'
export default {
    data () {
        return{
            links: null
        }
    },
    methods:{
        changeDrawer () {
            event.$emit('changeDrawer')
        }
    },
    created () {
        this.links = this.$store.getters.getLinks
    }
}
</script>