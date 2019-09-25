<template>
    <div class="container">
        <div class="card-box" v-for="goods in goodsArray" :key=goods.id>
            <app-card 
                :id="goods.id" 
                :title="goods.title" 
                :description='goods.description' 
                :price='goods.price' 
                :imgSrc='goods.imgSrc' 
                :unit='goods.unit'/>
        </div>
    </div>
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
    },
    created () {
        this.$store.dispatch('getGoods');
    }
}
</script>

<style scoped>
body{
    margin: 0;
}
.container {
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.card-box {
    background: #ccc;
    margin: 10px;
}

</style>