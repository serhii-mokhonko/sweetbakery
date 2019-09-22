<template>
<v-card
    class="mx-auto"
    elevation="10"
    max-width="360"
>
    <v-img
        color="black--text"
        height="200px"
        :src=imgSrc
    >
        <v-card-title class="align-end fill-height">{{ title }}</v-card-title>
    </v-img>

    <v-card-text>
        <span class="text--primary">
        <span>{{ description }}</span><br>
        </span>
        <span>Price: <span class="red--text"><strong>{{ price }}</strong></span> $/kg </span>
    </v-card-text>

    <v-card-actions>
        <router-link tag='button' :to="/goods/+id">
            <v-icon left>add_shopping_cart</v-icon>
            Замовити
        </router-link>
    </v-card-actions>
</v-card>
</template>

<script>
export default {
    props: ['id', 'title', 'description', 'price', 'imgSrc']
}
</script>