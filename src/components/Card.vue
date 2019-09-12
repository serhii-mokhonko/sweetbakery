<template>
<v-card
    class="mx-auto"
    elevation="10"
    max-width="360"
>
    <v-img
        class="white--text"
        height="200px"
        src="https://img.taste.com.au/_8bUFGqy/taste/2018/10/black-velvet-cake-142066-1.jpg"
    >
        <v-card-title class="align-end fill-height">Cake</v-card-title>
    </v-img>

    <v-card-text>
        <span>Cake</span><br>
        <span class="text--primary">
        <span>Delisious cake</span><br>
        <span>Some description</span>
        </span>
    </v-card-text>

    <v-card-actions>
        <v-btn
            color="accent"
        >
            Read more
        </v-btn>
        <v-btn
            color="success"
        >
        <v-icon left>add_shopping_cart</v-icon>
            Add to card
        </v-btn>
    </v-card-actions>
</v-card>
</template>