<template>
    <v-container fluid class="pa-0 ma-0">
        <v-row class="pa-0">
            <v-col >
                <v-img
                    src="https://picsum.photos/id/459/1024/480"
                    aspect-ratio="1"
                    class="grey lighten-2"
                    max-height="500"
                ></v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card
                    max-width="600"
                    class="mx-auto"
                >
                    <v-card-title>
                        Have questions? Write me a letter
                    </v-card-title>
                    <v-card-text>
                        <form>
                            <v-text-field
                                v-model="name"
                                label="Name"
                            ></v-text-field>
                            <v-text-field
                                v-model="phone"
                                label="Phone"
                            ></v-text-field>
                            <v-textarea
                                v-model="massege"
                                label="Massege"
                                auto-grow
                                outlined
                                rows="3"
                                row-height="15"
                            ></v-textarea>
                            <v-btn class="mr-4" @click="submit">Send</v-btn>
                            <v-btn @click="clear()">clear</v-btn>
                        </form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            phone: "",
            massege: "",
        }
    },
    methods: {
        submit () {
        },
        clear () {
        this.name = ''
        this.phone = ''
        this.massege = ''
        }
    }
}
</script>