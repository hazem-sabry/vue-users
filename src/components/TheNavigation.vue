<template>
  <nav class="nav">
    <div class="container">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link to="/">Users</router-link>
        </li>
        <li class="nav__item">
          <router-link to="resources">Resources</router-link>
        </li>
        <li class="nav__item">
          <router-link to="login">Login / Register</router-link>
        </li>
        <li class="nav__item nav__item--end">
          <button @click="logout">Logout</button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Cookies from "js-cookie";

export default {
  name: "TheNavigation",
  methods: {
    logout() {
      Cookies.remove("token");
      this.$router.push("login");
    },
  },
};
</script>

<style lang="postcss" scoped>
.nav {
  @apply bg-primary text-white;

  &__list {
    @apply flex items-center justify-start w-full;
  }

  &__item {
    @apply mr-xs py-2;

    &--end {
      @apply ml-auto;
    }
  }
}
</style>
