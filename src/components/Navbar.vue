<template>
  <div class="nav">
    <div class="drawer">
      <v-btn class="d-flex" @click="changeDrawer()" icon dark>
        <v-icon>view_headline</v-icon>
      </v-btn>
    </div>
    <div class="logo">
      <router-link tag="strong" to="/">{{ logo }}</router-link>
    </div>
    <div class="link-container">
      <div class="link" v-for="(link, id) in links" :key="id">
        <v-btn :to="link.href" height="100%" text dark>
          <v-icon left>{{ link.icon }}</v-icon>
          {{ link.name }}
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
      logo: "Sweet Bakery",
      links: null
    };
  },
  methods: {
    changeDrawer() {
      event.$emit("changeDrawer");
    }
  },
  created() {
    this.links = this.$store.getters.getLinks;
  }
};
</script>

<style scoped>
@media screen and (max-width: 860px) {
  .nav {
    justify-content: center;
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
  .logo {
    flex-grow: 1;
    flex-shrink: 0;
  }
  .link-container {
    display: flex;
  }
}

.nav {
  background: #880e4f;
  color: white;
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
  margin: auto 15px;
  font-size: 1.5em;
}
.logo strong {
  cursor: pointer;
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