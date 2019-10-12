<template>
  <v-container fluid>
    <v-row no-gutters class="d-flex flex-md-row flex-column-reverse">
      <v-col sm="6" xs="12">
        <form>
          <v-text-field v-model="userName" label="Ваше ім'я *"></v-text-field>
          <v-text-field v-model="phone" label="Номер телефона *"></v-text-field>
          <span class="font-weight-light">Оберіть дату замовлення</span>
          <v-date-picker
            class="mt-4"
            v-model="date"
            first-day-of-week="1"
            full-width
            :landscape="$vuetify.breakpoint.smAndUp"
            :allowed-dates="allowedDate"
            :min="minDateOrder"
            :max="maxDateOrder"
          ></v-date-picker>
          <v-textarea label="Коментар" v-model="comment" auto-grow clearable></v-textarea>
          <v-text-field v-model="socialpage" label="Посилання на соціальні мережі"></v-text-field>
          <h2>Вартість замовлення: {{sum}} грн.</h2>
          <v-btn color="primary" class="mr-4 mt-2" @click="createOrder">Замовити</v-btn>
          <!-- <v-btn color="error" @click="clear">Очистити</v-btn> -->
        </form>
      </v-col>
      <v-col sm="6" xs="12" v-if="card.length > 0">
        <v-card class="mx-auto ml-md-3" max-width="100%" min-width="350px">
          <v-list max-width="100%">
            <v-list-item v-for="item in card" :key="item.id">
              <v-list-item-avatar size="60">
                <v-img :src="item.imgSrc"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
                <v-list-item-subtitle three-line v-html="subtitle(item)"></v-list-item-subtitle>
                <v-list-item-subtitle three-line v-html="price(item)"></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="error" @click="deleteFromCard(item.id)">delete_forever</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-container>
</template>

<script>
import * as firebase from "firebase";
export default {
  data() {
    return {
      userName: "",
      phone: "",
      date: new Date().toISOString().substr(0, 10),
      comment: "",
      socialpage: "",
      dates: []
    };
  },
  computed: {
    card() {
      return this.$store.getters.getCard;
    },
    sum() {
      const card = this.$store.getters.getCard;
      let price = 0;
      card.forEach(element => {
        price = price + element.sum;
      });
      return price;
    },
    loading() {
      return this.$store.getters.getLoading;
    },
    minDateOrder() {
      let now = new Date()
        .toISOString()
        .slice(0, 10)
        .split("-");
      let year = parseInt(now[0]);
      let month = parseInt(now[1]);
      let day = parseInt(now[2]);
      switch (day) {
        case 27:
          day = 1;
          month = month + 1;
          break;
        case 28:
          day = 2;
          month = month + 1;
          break;
        case 29:
          day = 3;
          month = month + 1;
          break;
        case 30:
          day = 4;
          month = month + 1;
          break;
        case 31:
          day = 5;
          month = month + 1;
          break;
        default:
          day = day + 5;
      }
      if (month >= 12) {
        month = 1;
        year = year + 1;
      }
      if (month < 10) month = "0" + String(month);
      if (day < 10) day = "0" + String(day);
      return year + "-" + month + "-" + day;
    },
    maxDateOrder() {
      let now = new Date()
        .toISOString()
        .slice(0, 10)
        .split("-");
      let year = parseInt(now[0]);
      let month = parseInt(now[1]);
      let day = parseInt(now[2]) + 15;
      if (day >= 28) {
        day = 1;
        month = month + 1;
      }
      if (month >= 12) {
        month = 1;
        year = year + 1;
      } else {
        month = month + 1;
      }
      if (month < 10) month = "0" + String(month);
      if (day < 10) day = "0" + String(day);
      return year + "-" + month + "-" + day;
    }
  },
  methods: {
    subtitle(item) {
      return item.count + " " + item.unit;
    },
    price(item) {
      return "Ціна: <b>" + item.sum + " грн.</b>";
    },
    clear() {
      this.userName = "";
      this.phone = "";
      this.comment = "";
      this.socialpage = "";
    },
    deleteFromCard(id) {
      this.$store.dispatch("deleteFromCard", id);
    },
    createOrder() {
      this.$store
        .dispatch("order", {
          name: this.userName,
          phone: this.phone,
          comment: this.comment,
          socialpage: this.socialpage,
          date: this.date
        })
        .then(() => localStorage.clear())
        .then(() => this.clear())
        .then(() => this.$router.push({ name: "home" }));
    },
    allowedDate(val) {
      if (this.dates.indexOf(val) != -1) return false;
      else return true;
    }
  },
  beforeCreate() {
    firebase
      .database()
      .ref("orders")
      .once("value")
      .then(snapshot => {
        const val = snapshot.val();
        for (let item in val) {
          this.dates.push(val[item].orderDate);
        }
      });
  },
  created() {
    this.$store.dispatch("updateCardFromStorage");
  }
};
</script>

<style scoped>
.container {
  margin-top: 40px;
}
</style>