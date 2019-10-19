<template>
  <div class="container">
    <div class="sub-box">
      <div class="box">
        <img :src="goodsById.imgSrc" :alt="goodsById.title" />
      </div>
    </div>
    <div class="sub-box">
      <div class="box">
        <h1 class="display-3">{{ goodsById.title }}</h1>
      </div>
      <div class="box">
        <h1 class="price">{{ goodsById.price }} грн. / {{ goodsById.unit }}</h1>
      </div>
      <div class="box">
        <p>{{ goodsById.description }}</p>
      </div>
      <div class="box">
        <v-select :items="goodsById.count" v-model="count" :label="goodsById.unit" outlined></v-select>
      </div>
      <div class="box" v-if="tasteFieldVisibility">
        <v-select :items="goodsById.taste" v-model="taste" label="Смак" outlined></v-select>
      </div>
      <div class="box" v-if="keksFieldVisibility">
        <v-select :items="goodsById.keks" v-model="keks" label="Кекс" outlined chips multiple></v-select>
      </div>
      <div class="box" v-if="fillFieldVisibility">
        <v-select :items="goodsById.fill" v-model="fill" label="Начинка" outlined chips multiple></v-select>
      </div>
      <div class="box" v-if="creamFieldVisibility">
        <v-select :items="goodsById.cream" v-model="cream" label="Крем" outlined chips multiple></v-select>
      </div>
      <div class="box" v-if="decorFieldVisibility">
        <v-select :items="goodsById.decor" v-model="decor" label="Декор" outlined chips multiple></v-select>
      </div>
      <div class="box">
        <v-textarea v-model="comment" name="Comment" label="Коментар" outlined></v-textarea>
      </div>
      <div class="box" style="margin-bottom: 15px;">
        <h1>Сума: {{ price }} грн.</h1>
      </div>
      <div class="box">
        <v-btn color="primary" large @click="addToCard()">Додати у кошик</v-btn>
      </div>
    </div>
    <v-dialog v-model="dialog" persistent max-width="768px">
      <!-- <template v-slot:activator="{ on }"></template> -->
      <v-card>
        <v-card-title class="headline amber darken-3" primary-title>Кошик</v-card-title>
        <v-list three-line>
          <template v-for="(item) in 2">
            <v-list-item :key="item" class="mb-2">
              <v-img
                :aspect-ratio="4/3"
                max-width="175"
                src="https://images.idgesg.net/images/article/2019/10/google-pixel-4-100814418-large.jpg"
              ></v-img>

              <v-list-item-content>
                <!-- <v-list-item-title v-html="ТОРТ"></v-list-item-title> -->
                <!-- <v-list-item-subtitle v-html=""></v-list-item-subtitle> -->
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-grey lighten-1" @click="continueShopping" text>Продовжити покупки</v-btn>
          <v-btn color="#f1c40f" @click="goToShoppingCard">До кошика</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import shoppingCard from "../store/shoppingCard";
export default {
  data: () => ({
    goodsById: {},
    count: 0,
    taste: null,
    keks: null,
    fill: null,
    cream: null,
    decor: null,
    comment: null,
    dialog: false
  }),
  computed: {
    tasteFieldVisibility() {
      return this.goodsById["taste"];
    },
    keksFieldVisibility() {
      return this.goodsById["keks"];
    },
    fillFieldVisibility() {
      return this.goodsById["fill"];
    },
    creamFieldVisibility() {
      return this.goodsById["cream"];
    },
    decorFieldVisibility() {
      return this.goodsById["decor"];
    },
    price() {
      return this.count * this.goodsById.price;
    }
  },
  methods: {
    addToCard() {
      this.$store
        .dispatch("addToCard", {
          name: this.goodsById.title,
          unit: this.goodsById.unit,
          count: this.count,
          sum: this.price,
          taste: this.taste,
          keks: this.keks,
          fill: this.fill,
          cream: this.cream,
          decor: this.decor,
          comment: this.comment,
          imgSrc: this.goodsById.imgSrc
        })
        .then(() => (this.dialog = true));
    },
    goToShoppingCard() {
      this.$router.push({ name: "shopping-card" });
    },
    continueShopping() {
      this.$router.push({ name: "home" });
    }
  },
  created() {
    this.$store
      .dispatch("getGoodsById", this.$route.params.id)
      .then(data => (this.goodsById = data));
  }
};
</script>

<style scoped>
@media screen and (max-width: 860px) {
  .container {
    flex-direction: column;
  }
}

.container {
  max-width: 100%;
  min-width: 350px;
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.sub-box {
  min-width: 350px;
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
  border-radius: 5px;
  color: #3498db;
}
</style>