<template>
    <div class="container">
        <div class="sub-box">
            <div class="box">
                <img :src=filteredGoods.imgSrc :alt="filteredGoods.title">
            </div>
        </div>
        <div class="sub-box">
            <div class='box'>
                <h1 class='display-3'>{{ filteredGoods.title }}</h1>
            </div>
            <div class="sub-box">
                <h1 class='price'>{{ filteredGoods.price }} грн. / {{filteredGoods.unit }}</h1>
            </div>
            <div class="box">
                <p>{{ filteredGoods.description }}</p>
            </div>
            <div class="box">
                <v-select
                    :items="weight"
                    label="Вага"
                    outlined
                ></v-select>
            </div>
            <div class="box">
                <v-select
                    :items="spongeCake"
                    label="Sponge Cake"
                    outlined
                    chips
                    multiple
                ></v-select>
            </div>
            <div class="box">
                <v-select
                    :items="decor"
                    label="Decor"
                    outlined
                    chips
                    multiple
                ></v-select>
            </div>
            <div class="box">
                <v-textarea
                    outlined
                    name="Comment"
                    label="Leave your comment/wishes"
                ></v-textarea>
            </div>
        </div>
    </div>
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
        this.$store.dispatch('getGoodsById', this.$route.params.id)
            .then((data) => this.filteredGoods = data)
    }
 }
</script>

<style scoped>
.container {
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.sub-box{
    min-width: 430px;
    flex-grow: 1;
    flex-basis: 50%;
    padding: 5px;
}

.box img {
    width: 100%;
    height: auto;
    max-width: 100%;
    border-radius: 10px;
}

.price {
    padding: 10px;
    border: 2px solid red;
    background: #ccc;
    border-radius: 5px;
}
</style>