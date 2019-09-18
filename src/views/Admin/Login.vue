<template>
        <v-content>
            <v-container
                class="fill-height"
                fluid
            >
                <v-row
                align="center"
                justify="center"
                >
                    <v-col
                        cols="12"
                        sm="8"
                        md="6"
                    >
                        <v-card class="elevation-12">
                            <v-toolbar
                                color="pink darken-4"
                                dark
                                flat
                            >
                                <v-toolbar-title>Login form</v-toolbar-title>
                                <div class="flex-grow-1"></div>
                                <v-progress-linear
                                    v-if="loading"
                                    color="pink"
                                    indeterminate
                                    absolute
                                    bottom
                                ></v-progress-linear>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                        label="Login"
                                        name="login"
                                        prepend-icon="person"
                                        type="text"
                                        color="pink darken-4"
                                        v-model="user.login"
                                    ></v-text-field>

                                    <v-text-field
                                        id="password"
                                        label="Password"
                                        name="password"
                                        prepend-icon="lock"
                                        type="password"
                                        color="pink darken-4"
                                        v-model="user.password"
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <div class="flex-grow-1"></div>
                                <v-btn color="pink darken-4" class="px-5" dark @click='loginUser()'>Login</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
</template>

<script>
export default {
    data: () => ({
        user: {
            login: null,
            password: null
        },
        loading: true
    }),
    methods: {
        loginUser () {
            this.$store.dispatch('loginUser', this.user)
        }
    }
}
</script>