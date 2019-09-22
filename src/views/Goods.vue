<template>
<v-container fluid>
        <v-row class="pa-0">
            <v-col cols="12" sm='12'>
                <h1 class='text-center'>{{ filteredGoods.title }}</h1>
            </v-col>
            <v-col cols="12" sm='12' md='6'>
                <v-img
                    :src=filteredGoods.imgSrc
                    aspect-ratio="1"
                    class="grey lighten-2"
                    max-height="400"
                ></v-img>
            </v-col>
            <v-col cols="12" sm='12' md='6' >
                <h1>{{ filteredGoods.price }} грн. / кг(шт.)</h1>
                <p>{{ filteredGoods.description }}</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-form>
                    <v-row>
                        <v-col cols="12" sm='12' md='4'>
                            <v-select
                                :items="weight"
                                label="Waight"
                                outlined
                            ></v-select>
                        </v-col>
                        <v-col cols="12" sm='12' md='4'>
                            <v-select
                                :items="spongeCake"
                                label="Sponge Cake"
                                outlined
                                chips
                                multiple
                            ></v-select>
                        </v-col>
                        <v-col cols="12" sm='12' md='4'>
                            <v-select
                                :items="cream"
                                label="Cream"
                                outlined
                                chips
                                multiple
                            ></v-select>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                            <v-select
                                :items="filling"
                                label="Filling"
                                outlined
                                chips
                                multiple
                            ></v-select>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                            <v-select
                                :items="decor"
                                label="Decor"
                                outlined
                                chips
                                multiple
                            ></v-select>
                        </v-col>
                        <v-col cols="12" md="12">
                            <v-textarea
                                outlined
                                name="Comment"
                                label="Leave your comment/wishes"
                            ></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-btn color="success" block large><v-icon left>add_shopping_cart</v-icon>Order</v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        filteredGoods: {},
        weight: ["1 kg", "2 kg", "3 kg", "4 kg", "5 kg", "6 kg", "7 kg"],
        spongeCake: ["Black", "White"],
        cream: ["cream 1", "cream 2", "cream 3",],
        filling: ["cherry", "apple", "banan", "ets",],
        decor: ["flowers", "candies", "toper", "etc"]
    }),
    created () {
        const goods = this.$store.getters.getGoodsArray;
        const filteredGoods = goods.find((item) => item.id == this.$route.params.id);
        this.filteredGoods = filteredGoods;
    }
 }
</script>