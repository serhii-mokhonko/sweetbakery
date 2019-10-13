<template>
  <v-container fluid>
    <v-row no-gutters class="d-flex flex-md-row flex-column-reverse">
      <v-col sm="6" xs="12">
        <v-form v-model="valid">
          <v-text-field v-model="userName" label="Ваше ім'я *" :rules="nameRules" required></v-text-field>
          <v-text-field
            v-model="phone"
            label="Номер телефона *"
            :rules="phoneRules"
            :counter="13"
            required
          ></v-text-field>
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
          <v-btn
            color="primary"
            class="mr-4 mt-2"
            @click="createOrder"
            :disabled="validate"
          >Замовити</v-btn>
        </v-form>
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
      date: "",
      comment: "",
      socialpage: "",
      dates: [],
      valid: false,
      nameRules: [
        v => !!v || "Заповніть, будь-ласка, обов'язкове поле.",
        v => v.length >= 3 || "Повинно бути не менше 3 символів."
      ],
      phoneRules: [
        v => !!v || "Заповніть, будь-ласка, обов'язкове поле.",
        v => v.length >= 10 || "Довжина номеру повинна бути не менше 10 символів.",
        v => v.length <= 13 || "Довжина номеру повинна бути не більше 13 символів.",
        v => !isNaN(v) || "Введіть номер в форматі 0981112233 або 380981112233"
      ]
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
      let date = new Date()
        .toISOString()
        .slice(0, 10)
        .split("-");
      let start = new Date(
        date[0],
        parseInt(date[1]) - 1,
        parseInt(date[2]) + 6
      );
      return start.toISOString().slice(0, 10);
    },
    maxDateOrder() {
      let date = new Date()
        .toISOString()
        .slice(0, 10)
        .split("-");
      let end = new Date(
        date[0],
        parseInt(date[1]) - 1,
        parseInt(date[2]) + 50
      );
      return end.toISOString().slice(0, 10);
    },
    validate() {
      if (this.valid && this.$store.getters.getCard.length > 0 && this.date) {
        return false;
      } else {
        return true;
      }
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