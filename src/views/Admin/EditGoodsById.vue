<template>
    <div class="container">
        <div class='text-center'>
            <h1>Редагування картки товару</h1>
        </div>
        <div class="box">
            <v-text-field
                label="Назва"
                v-model='goodsById.title'
                outlined
                clearable
            ></v-text-field>
        </div>
        <div class="box">
            <v-textarea
                label="Outlined textarea"
                v-model="goodsById.description"
                outlined
                clearable
                no-resize
            ></v-textarea>
        </div>
        <div class="box">
            <v-text-field
                label="Ціна"
                v-model='goodsById.price'
                outlined
                clearable
            ></v-text-field>
        </div>
        <div class="box">
            <v-select
                label="Одиниця виміру"
                v-model='goodsById.unit'
                :items="unit"
                outlined
            ></v-select>
        </div>
        <div class="box">
            <v-combobox
                    label="Кілограми / штуки"
                    v-model="goodsById.count"
                    chips
                    clearable
                    multiple
                    outlined
                >
                <template v-slot:selection="{ item }">
                    <v-chip
                        @click:close="removeCount(item)"
                        close
                    >
                        <strong>{{ item }}</strong>
                    </v-chip>
                </template>
            </v-combobox>
        </div>
        <div class="box">
            <v-combobox
                    label="Варіанти смаків"
                    v-model="goodsById.taste"
                    chips
                    clearable
                    multiple
                    outlined
                >
                <template v-slot:selection="{ item }">
                    <v-chip
                        @click:close="removeTaste(item)"
                        close
                    >
                        <strong>{{ item }}</strong>
                    </v-chip>
                </template>
            </v-combobox>
        </div>
        <div class="box">
            <v-combobox
                    label="Кекс"
                    v-model="goodsById.keks"
                    chips
                    clearable
                    multiple
                    outlined
                >
                <template v-slot:selection="{ item }">
                    <v-chip
                        @click:close="removeKeks(item)"
                        close
                    >
                        <strong>{{ item }}</strong>
                    </v-chip>
                </template>
            </v-combobox>
        </div>
        <div class="box">
            <v-combobox
                    label="Начинка"
                    v-model="goodsById.fill"
                    chips
                    clearable
                    multiple
                    outlined
                >
                <template v-slot:selection="{ item }">
                    <v-chip
                        @click:close="removeFill(item)"
                        close
                    >
                        <strong>{{ item }}</strong>
                    </v-chip>
                </template>
            </v-combobox>
        </div>
        <div class="box">
            <v-combobox
                    label="Крем"
                    v-model="goodsById.cream"
                    chips
                    clearable
                    multiple
                    outlined
                >
                <template v-slot:selection="{ item }">
                    <v-chip
                        @click:close="removeCream(item)"
                        close
                    >
                        <strong>{{ item }}</strong>
                    </v-chip>
                </template>
            </v-combobox>
        </div>
        <div class="box">
            <v-combobox
                    label="Декор"
                    v-model="goodsById.decor"
                    chips
                    clearable
                    multiple
                    outlined
                >
                <template v-slot:selection="{ item }">
                    <v-chip
                        @click:close="removeDecor(item)"
                        close
                    >
                        <strong>{{ item }}</strong>
                    </v-chip>
                </template>
            </v-combobox>
        </div>
        <div class="box">
            <v-file-input
                label="Завантажити нову картинку"
                v-model="goodsById.img"
                @change="onFileChange()"
                prepend-icon="mdi-camera"
                show-size
                solo
                outlined
            ></v-file-input>
            <v-img :src='goodsById.imgSrc'></v-img>
        </div>
        <div class="box">
            <v-sheet class="pa-5">
                <v-switch v-model="goodsById.accessibility" flat label='Доступність'></v-switch>
            </v-sheet>
        </div>
        <div class="box">
            <v-btn 
                color="primary"
                large
                @click="updateGoods()"
            ><v-icon left>edit</v-icon>Зберегти</v-btn>
            <v-btn
                class="ml-3"
                color="error"
                large
                @click="deleteGoods"
            ><v-icon left>delete</v-icon>Видалити</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        goodsById: {},
        unit: ['кг', 'шт.']
    }),
    methods: {
        updateGoods () {
            this.$store.dispatch('updateGoods', {...this.goodsById, id: this.$route.params.id})
            // console.log({...this.goodsById, id: this.$route.params.id})
        },
        onFileChange (event) {
            const reader = new FileReader()
            reader.onload = (e) => {
                this.goodsById.imgSrc = reader.result
            }
            const file = this.goodsById.img
            reader.readAsDataURL(file)
        },
        deleteGoods () {
            this.$store.dispatch('deleteGoods', this.$route.params.id)
            this.$router.push({name: 'editGoods'})
        },
        removeCount (item) {
            this.goodsById['count'].splice(this.goodsById['count'].indexOf(item), 1)
            this.goodsById['count'] = [...this.goodsById['count']]
        },
        removeTaste (item) {
            this.goodsById['taste'].splice(this.goodsById['taste'].indexOf(item), 1)
            this.goodsById['taste'] = [...this.goodsById['taste']]
        },
        removeKeks (item) {
            this.goodsById['keks'].splice(this.goodsById['keks'].indexOf(item), 1)
            this.goodsById['keks'] = [...this.goodsById['keks']]
        },
        removeFill (item) {
            this.goodsById['fill'].splice(this.goodsById['fill'].indexOf(item), 1)
            this.goodsById['fill'] = [...this.goodsById['fill']]
        },
        removeCream (item) {
            this.goodsById['cream'].splice(this.goodsById['cream'].indexOf(item), 1)
            this.goodsById['cream'] = [...this.goodsById['cream']]
        },
        removeDecor (item) {
            this.goodsById['decor'].splice(this.goodsById['decor'].indexOf(item), 1)
            this.goodsById['decor'] = [...this.goodsById['decor']]
        },
    },
    created () {
        this.$store.dispatch('getGoodsById', this.$route.params.id)
            .then(data => this.goodsById = data)
    }
    
}
</script>

<style scoped>
    .container {
        max-width: 960px;
        min-width: 350px;
    }
</style>