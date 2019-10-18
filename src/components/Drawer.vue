<template>
  <v-navigation-drawer v-model="drawer" width="75%" fixed>
    <v-list>
      <v-list-item v-for="(link, id) in links" :key="id" :to="link.href" link>
        <v-list-item-icon>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ link.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-if="this.$store.getters.getUser" @click="signOut" link>
        <v-list-item-icon>
          <v-icon>arrow_back</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Вихід</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { event } from "../main";

export default {
  data() {
    return {
      drawer: false
    };
  },
  computed: {
    links() {
      if (this.$store.getters.getUser) {
        return [
          { href: "/", name: "Головна", icon: "home" },
          { href: "/about", name: "Про нас", icon: "person" },
          { href: "/contacts", name: "Контакти", icon: "contacts" },
          { href: "/shopping-card", name: "Кошик", icon: "shopping_cart" },
          {
            href: "/admin/add-new-goods",
            name: "Додати товар",
            icon: "fiber_new"
          },
          { href: "/admin/goods", name: "Всі продукти", icon: "list" }
        ];
      } else {
        return [
          { href: "/", name: "Головна", icon: "home" },
          { href: "/about", name: "Про нас", icon: "person" },
          { href: "/contacts", name: "Контакти", icon: "contacts" },
          { href: "/shopping-card", name: "Кошик", icon: "shopping_cart" },
          { href: "/Login", name: "Вхід", icon: "vpn_key" }
        ];
      }
    }
  },
  methods: {
    signOut() {
      this.$store.dispatch("signOut");
      if (this.$route.name != "home") this.$router.push({ name: "home" });
    }
  },
  created() {
    event.$on("changeDrawer", () => (this.drawer = !this.drawer));
    this.links = this.$store.getters.getLinks;
  }
};
</script>

<style scoped>
.v-navigation-drawer {
  margin-top: 40px;
}
</style>