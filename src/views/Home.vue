<template>
    <v-container fluid class="pa-0">
        <v-row>
            <v-col v-for="goods in goodsArray" :key=goods.id>
                <app-card :id="goods.id" :title="goods.title" :description='goods.description' :price='goods.price' :imgSrc='goods.imgSrc' />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Card from '../components/Card'
export default {
    computed: {
        goodsArray () {
            return this.$store.getters.getGoodsArray
        }
    },
    components: {
        appCard: Card
    }
}
</script>

<style>

</style>