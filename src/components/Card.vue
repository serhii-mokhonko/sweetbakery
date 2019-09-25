<template>
<v-card
    class="mx-auto"
    elevation="10"
    width="320"
>
    <v-img
        height="200px"
        :src=imgSrc
    >
        <v-card-title class="align-end fill-height grey--text text--lighten-3">{{ title }}</v-card-title>
    </v-img>
    <v-card-text>
        <span class='text-center'>
            <h1 class="green--text text--lighten-1">{{ price }} грн./{{ unit }} </h1>
        </span>
    </v-card-text>

    <v-card-actions>
        <v-btn 
            class="ma-2" 
            color="pink darken-4"
            :to="/goods/+id"
            dark
        >
            <v-icon left>add_shopping_cart</v-icon>
            Замовити
        </v-btn>
    </v-card-actions>
</v-card>
</template>

<script>
export default {
    props: ['id', 'title', 'description', 'price', 'imgSrc', 'unit']
}
</script>