<template>
  <section class="register">
    <form class="register__form" @submit.prevent="onSubmit">
      <h1 class="text-4xl text-primary">Register</h1>
      <p class="text-tertiary mb-5 text-xs">
        <span>Do you have an account?</span>
        <router-link to="/login">Login</router-link>
      </p>
      <input
        type="text"
        class="register__input"
        v-model="username"
        placeholder="Type your username"
        required
      />
      <input
        type="email"
        class="register__input"
        v-model="email"
        placeholder="Type your email"
        required
      />
      <input
        type="password"
        class="register__input"
        v-model="password"
        placeholder="Type your password"
        required
      />
      <input type="submit" class="register__submit" value="Register" />
    </form>
    <small v-if="error" class="text-danger">Missing email or username</small>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "RegisterPage",
  data() {
    return {
      error: false,
      username: null,
      email: null,
      password: null,
    };
  },
  computed: {
    ...mapGetters({
      status: "auth/getLoginStatus",
    }),
  },
  methods: {
    ...mapActions({
      register: "auth/register",
    }),
    onSubmit() {
      this.register({
        username: this.username,
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
.register {
  @apply flex flex-col items-center justify-center;
  min-height: 100vh;

  &__form {
    @apply flex flex-col items-center justify-center p-xs rounded-md shadow-lg bg-white w-full max-w-sm;
  }

  &__input {
    @apply w-full outline-none border border-primary p-2 text-base mb-3;
  }

  &__submit {
    @apply w-full bg-primary text-white py-2 cursor-pointer;
  }
}
</style>
