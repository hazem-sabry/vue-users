<template>
  <navigation />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import Cookies from "js-cookie";
import { mapMutations } from "vuex";
import Navigation from "@/components/TheNavigation.vue";
export default {
  name: "App",
  components: {
    Navigation,
  },
  methods: {
    ...mapMutations({
      setToken: "auth/setToken",
      setLoginStatus: "auth/setLoginStatus",
    }),
  },
  mounted() {
    const token = Cookies.get("token");
    if (token && token.length) {
      this.setToken(token);
      this.setLoginStatus(true);
    }
  },
};
</script>
