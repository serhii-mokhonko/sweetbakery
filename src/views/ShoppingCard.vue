<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col sm="6" xs="12">
        <v-card class="mr-3" max-width="100%" min-width="350px" v-if="card.length > 0">
          <v-list max-width="100%">
            <v-list-item v-for="item in card" :key="item.gid">
              <v-list-item-avatar size="60">
                <v-img src="https://picsum.photos/id/106/2592/1728"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>

                <v-list-item-title v-text="item.name"></v-list-item-title>
                <v-list-item-subtitle three-line v-html="subtitle(item)"></v-list-item-subtitle>

              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="error">delete_forever</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col sm="6" xs="12">
        <h1>Трохи інформації про Вас</h1>
        <form>
          <v-text-field v-model="userName" label="Ваше ім'я *"></v-text-field>
          <v-text-field v-model="phone" label="Номер телефона *"></v-text-field>
          <v-text-field v-model="comment" label="Коментар"></v-text-field>
          <v-text-field v-model="socialpage" label="Посилання на соціальні мережі"></v-text-field>
          <v-btn color="success" class="mr-4">Замовити</v-btn>
          <v-btn color="error" @click="clear">Очистити</v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      phone: "",
      comment: "",
      socialpage: ""
    };
  },
  computed: {
    card () {
      return this.$store.getters.getCard;
    }
  },
  methods: {
    subtitle (item) {
      return item.count + " " + item.unit
    },
    clear() {
      this.name = "";
      this.phone = "";
      this.comment = "";
      this.socialpage = "";
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 40px;
}
</style>