<template>
<v-content class="mx-2">
    <v-form>
        <v-row>
            <v-col cols="12" sm="12" class="text-center">
                <h1>Новий товар</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="12">
                <v-text-field
                    label="Назва"
                    v-model="goods.title"
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-file-input
                    label="File input"
                    placeholder="Select your files"
                    v-model="goods.img"
                    outlined
                ></v-file-input>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="12">
                <v-textarea
                    label="Опис"
                    v-model="goods.description"
                    name="description"
                    outlined
                ></v-textarea>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="6" md="4">
                <v-text-field
                    label="Ціна:"
                    v-model="goods.price"
                    outlined
                ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
                <v-select
                    label="Одиниця виміру"
                    v-model='goods.unit'
                    :items="unit"
                    outlined
                    ></v-select>
            </v-col>
            <v-col cols="12" md="4">
                <v-combobox
                    v-model="goods.taste"
                    chips
                    clearable
                    label="Варіанти смаків"
                    multiple
                    outlined
                >
                    <template v-slot:selection="{ item }">
                        <v-chip
                            @click:close="remove(item)"
                            close
                        >
                            <strong>{{ item }}</strong>
                        </v-chip>
                    </template>
                </v-combobox>
            </v-col>
        </v-row>
        <v-row>
            <v-sheet class="pa-5">
                <v-switch v-model="goods.accessibility" flat label='Доступність'></v-switch>
            </v-sheet>
        </v-row>
        <v-row>
            <v-col cols="12" md="12">
                <v-btn 
                    color="success"
                    @click='addNewGoods()'
                    large
                >Зберегти</v-btn>
            </v-col>
        </v-row>
    </v-form>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
</v-content>
</template>

<script>
export default {
    data () {
        return {
            goods: {
                title: '',
                description: ``,
                taste: [],
                img: [],
                unit: '',
                price: 0,
                accessibility: true
            },
            unit: ['кг', 'шт.']
        }
    },
    computed: {
        loading () {
            return this.$store.getters.getLoading
        }
    },
    methods: {
        addNewGoods () {
            // console.log(this.goods.img['name'])
            this.$store.dispatch('addNewGoods', this.goods)
            .then(() => this.goods = {
                title: '',
                description: ``,
                taste: [],
                img: [],
                unit: '',
                price: 0,
                accessibility: true
            })
        },
        remove (item) {
            this.goods['taste'].splice(this.goods['taste'].indexOf(item), 1)
            this.goods['taste'] = [...this.goods['taste']]
        },
    }
}
</script>