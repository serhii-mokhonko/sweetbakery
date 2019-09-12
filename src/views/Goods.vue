<template>
<v-container fluid class="pa-0 ma-0">
        <v-row class="pa-0">
            <v-col >
                <v-img
                    src="https://img.taste.com.au/_8bUFGqy/taste/2018/10/black-velvet-cake-142066-1.jpg"
                    aspect-ratio="1"
                    class="grey lighten-2"
                    max-height="500"
                ></v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
            <h2>Price: 150 $</h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-form v-model="valid">
                    <v-container>
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
                        </v-container>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        weight: ["1 kg", "2 kg", "3 kg", "4 kg", "5 kg", "6 kg", "7 kg"],
        spongeCake: ["Black", "White"],
        cream: ["cream 1", "cream 2", "cream 3",],
        filling: ["cherry", "apple", "banan", "ets",],
        decor: ["flowers", "candies", "toper", "etc"]
    })
}
</script>