<template>
  <div class="nav">
    <div class="drawer">
      <v-btn class="d-flex drawer-btn" @click="changeDrawer()" icon>
        <v-icon>view_headline</v-icon>
      </v-btn>
    </div>
    <router-link class="logo" tag="div" to="/">
      <v-img src="../assets/cake.png" :max-width="46"></v-img>
      <strong>{{ logo }}</strong>
    </router-link>
    <div class="link-container">
      <div class="link" v-for="(link, id) in links" :key="id">
        <v-btn :to="link.href" height="100%" text>
          <v-icon left>{{ link.icon }}</v-icon>
          {{ link.name }}
        </v-btn>
      </div>
      <div class="link" v-if="this.$store.getters.getUser">
        <v-btn height="100%" text @click="signOut">
          <v-icon left>arrow_back</v-icon>Вихід
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { event } from "../main";
export default {
  data() {
    return {
      logo: "Sweet Bakery"
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
    },
    changeDrawer() {
      event.$emit("changeDrawer");
    }
  }
};
</script>

<style scoped>
@media screen and (max-width: 860px) {
  .nav {
    justify-content: center;
  }
  .drawer-btn {
    position: absolute;
    top: 5px;
    left: 0px;
  }
  .link-container {
    display: none;
  }
}

@media screen and (min-width: 861px) {
  .nav {
    justify-content: space-between;
  }
  .drawer {
    display: none;
  }
  .link-container {
    display: flex;
  }
}

.nav {
  background: #f1c40f;
  height: 48px;
  width: 100%;
  position: fixed;
  z-index: 9999;
  display: flex;
  flex-direction: row;
}
.drawer {
  margin: auto 5px;
}
.logo {
  display: flex;
  align-items: center;
  margin: auto 0;
  font-size: 1.5em;
  cursor: pointer;
}
.logo-box {
  height: 100%;
}
.logo-box img {
  height: 48px;
}
.link-container {
  justify-content: flex-end;
  flex-grow: 7;
}
.link {
  height: 100%;
  align-self: flex-end;
}
.link .v-btn {
  border-radius: 0px;
}
</style>>

</style>