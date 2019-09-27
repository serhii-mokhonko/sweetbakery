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
            <v-col cols="12" sm="12" md="4">
                <v-combobox
                    label="Кілограми / штуки"
                    v-model="goods.count"
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
            </v-col>
            <v-col cols="12" sm="12" md="4">
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
                            @click:close="removeTaste(item)"
                            close
                        >
                            <strong>{{ item }}</strong>
                        </v-chip>
                    </template>
                </v-combobox>
            </v-col>
            <v-col cols="12" sm="12" md="4">
                <v-combobox
                    label="Кекс"
                    v-model="goods.keks"
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
            </v-col>
            <v-col cols="12" sm="12" md="4">
                <v-combobox
                    label="Начинка"
                    v-model="goods.fill"
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
            </v-col>
            <v-col cols="12" sm="12" md="4">
                <v-combobox
                    label="Крем"
                    v-model="goods.cream"
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
            </v-col>
            <v-col cols="12" sm="12" md="4">
                <v-combobox
                    label="Декор"
                    v-model="goods.decor"
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
                count: [],
                taste: [],
                keks: [],
                fill: [],
                cream: [],
                decor: [],
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
            this.$store.dispatch('addNewGoods', this.goods)
            .then(() => this.goods = {
                title: '',
                description: ``,
                count: [],
                taste: [],
                keks: [],
                fill: [],
                cream: [],
                decor: [],
                img: [],
                unit: '',
                price: 0,
                accessibility: true
            })
        },
        removeCount (item) {
            this.goods['count'].splice(this.goods['count'].indexOf(item), 1)
            this.goods['count'] = [...this.goods['count']]
        },
        removeTaste (item) {
            this.goods['taste'].splice(this.goods['taste'].indexOf(item), 1)
            this.goods['taste'] = [...this.goods['taste']]
        },
        removeKeks (item) {
            this.goods['keks'].splice(this.goods['keks'].indexOf(item), 1)
            this.goods['keks'] = [...this.goods['keks']]
        },
        removeFill (item) {
            this.goods['fill'].splice(this.goods['fill'].indexOf(item), 1)
            this.goods['fill'] = [...this.goods['fill']]
        },
        removeCream(item) {
            this.goods['cream'].splice(this.goods['cream'].indexOf(item), 1)
            this.goods['cream'] = [...this.goods['cream']]
        },
        removeDecor(item) {
            this.goods['decor'].splice(this.goods['decor'].indexOf(item), 1)
            this.goods['decor'] = [...this.goods['decor']]
        },
    }
}
</script>