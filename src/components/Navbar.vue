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