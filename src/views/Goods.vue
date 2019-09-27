<template>
    <div class="container">
        <div class="sub-box">
            <div class="box">
                <img :src=goodsById.imgSrc :alt="goodsById.title">
            </div>
        </div>
        <div class="sub-box">
            <div class='box'>
                <h1 class='display-3'>{{ goodsById.title }}</h1>
            </div>
            <div class="box">
                <h1 class='price'>{{ goodsById.price }} грн. / {{ goodsById.unit }}</h1>
            </div>
            <div class="box">
                <p>{{ goodsById.description }}</p>
            </div>
            <div class="box">
                <v-select
                    :items="goodsById.count"
                    v-model="selectedCount"
                    :label="goodsById.unit"
                    outlined
                ></v-select>
            </div>
            <div class="box" v-if="tasteFieldVisibility">
                <v-select
                    :items="goodsById.taste"
                    v-model="selectedTaste"
                    label="Смак"
                    outlined
                ></v-select>
            </div>
            <div class="box" v-if="keksFieldVisibility">
                <v-select
                    :items="goodsById.keks"
                    v-model="selectedKeks"
                    label="Кекс"
                    outlined
                    chips
                    multiple
                ></v-select>
            </div>
            <div class="box" v-if="fillFieldVisibility">
                <v-select
                    :items="goodsById.fill"
                    v-model="selectedFill"
                    label="Начинка"
                    outlined
                    chips
                    multiple
                ></v-select>
            </div>
            <div class="box" v-if="creamFieldVisibility">
                <v-select
                    :items="goodsById.cream"
                    v-model="selectedCream"
                    label="Крем"
                    outlined
                    chips
                    multiple
                ></v-select>
            </div>
            <div class="box" v-if="decorFieldVisibility">
                <v-select
                    :items="goodsById.decor"
                    v-model="selectedDecor"
                    label="Декор"
                    outlined
                    chips
                    multiple
                ></v-select>
            </div>
            <div class="box">
                <v-textarea
                    outlined
                    name="Comment"
                    label="Коментар"
                ></v-textarea>
            </div>
            <div class="box">
                <h1>Сумма: {{ price }} грн.</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        selectedCount: 0,
        selectedTaste: null,
        selectedKeks: null,
        selectedFill: null,
        selectedCream: null,
        selectedDecor: null,
        goodsById: {},
    }),
    computed: {
        tasteFieldVisibility () {
            return this.goodsById['taste']
        },
        keksFieldVisibility () {
            return this.goodsById['keks']
        },
        fillFieldVisibility () {
            return this.goodsById['fill']
        },
        creamFieldVisibility () {
            return this.goodsById['cream']
        },
        decorFieldVisibility () {
            return this.goodsById['decor']
        },
        price () {
            return this.selectedCount * this.goodsById.price
        }
    },
    created () {
        this.$store.dispatch('getGoodsById', this.$route.params.id)
            .then((data) => this.goodsById = data)
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