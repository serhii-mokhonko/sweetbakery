<template>
<div class="container">
    <div
        class="box"
        v-for="(goods, index) in goodsArray"
        :key='index'
    >
        <v-card
            class="mx-auto"
            width="350"
            outlined
        >
            <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="headline mb-1">{{ goods.title }}</v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar
                tile
                size="150"
            >
                <v-img :src="goods.imgSrc"></v-img>
            </v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
            <v-btn color="primary" @click="edit(goods.id)"><v-icon left>edit</v-icon>Редагувати</v-btn>
            <v-btn color="error" @click="del(goods.id)"><v-icon left>delete</v-icon>Видалити</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</div>

</template>

<script>
export default {
    computed: {
        goodsArray () {
            return this.$store.getters.getGoodsArray
        }
    },
    methods: {
        edit (id) {
            console.log('Edit', id)
            /**/
        },
        del (id) {
            this.$store.dispatch('deleteGoods', id)
        }

    },
    created () {
        this.$store.dispatch('getGoods')
    }
    
}
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around
}

.box {
    margin: 5px 0;
}

</style>