<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card class="elevation-12">
            <v-toolbar color="primary" class="text-center" dark flat>
              <v-toolbar-title>Увійти</v-toolbar-title>
              <div class="flex-grow-1"></div>
              <v-progress-linear v-if="loading" color="#f1c40f" indeterminate absolute bottom></v-progress-linear>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="E-mail"
                  name="login"
                  prepend-icon="person"
                  type="text"
                  color="primary"
                  v-model="user.email"
                ></v-text-field>

                <v-text-field
                  id="password"
                  label="Пароль"
                  name="password"
                  prepend-icon="lock"
                  type="password"
                  color="primary"
                  v-model="user.password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn color="primary" class="px-5" dark @click="loginUser()">Вхід</v-btn>
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
      email: null,
      password: null
    },
  }),
  computed: {
    loading () {
      return this.$store.getters.getLoading
    }
  },
  methods: {
    loginUser() {
      this.$store.dispatch("loginUser", this.user)
        .then(() => this.$router.push({ name: "home" }));
    }
  }
};
</script>