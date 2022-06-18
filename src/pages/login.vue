<template>
  <section class="login">
    <form class="login__form" @submit.prevent="onSubmit">
      <h1 class="text-4xl text-primary">Login</h1>
      <p class="text-tertiary mb-5 text-xs">
        <span>You don't have an account?</span>
        <router-link to="/register">Register</router-link>
      </p>
      <input
        type="email"
        class="login__input"
        v-model="email"
        placeholder="Type your email"
      />
      <input
        type="password"
        class="login__input"
        v-model="password"
        placeholder="Type your password"
      />
      <input type="submit" class="login__submit" value="Login" />
    </form>
    <small v-if="error" class="text-danger">Missing email or username</small>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "LoginPage",
  data() {
    return {
      email: null,
      password: null,
      error: false,
    };
  },
  computed: {
    ...mapGetters({
      status: "auth/getLoginStatus",
    }),
  },
  methods: {
    ...mapActions({
      login: "auth/login",
    }),
    onSubmit() {
      this.login({
        email: this.email,
        password: this.password,
      })
        .then(() => {
          this.error = false;
          this.$router.push("/");
        })
        .catch(() => {
          this.error = true;
        });
    },
  },
};
</script>

<style lang="postcss" scoped>
.login {
  @apply flex flex-col items-center justify-center;
  min-height: 100vh;

  &__form {
    @apply flex flex-col items-center justify-center p-xs rounded-md shadow-lg bg-white w-full max-w-sm mb-3;
  }

  &__input {
    @apply w-full outline-none border border-primary p-2 text-base mb-3;
  }

  &__submit {
    @apply w-full bg-primary text-white py-2 cursor-pointer;
  }
}
</style>
