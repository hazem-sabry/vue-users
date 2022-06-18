<template>
  <article class="user">
    <img :src="avatar" :alt="`${fullName}'s avatar`" />
    <h2>{{ fullName }}</h2>
    <a :href="`mailto:${email}`">{{ email }}</a>
  </article>
</template>

<script>
export default {
  name: "UserComponent",
  props: {
    avatar: {
      type: String,
      required: true,
      default:
        "https://dreamvilla.life/wp-content/uploads/2017/07/dummy-profile-pic.png",
    },
    fullName: {
      type: String,
      required: true,
      default: "User name",
    },
    email: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
.user {
  @apply p-xs rounded-md shadow-lg w-64 m-3 text-center;

  img {
    @apply w-32 h-32 object-cover rounded-full mx-auto;
  }

  h2 {
    @apply text-xl font-semibold mt-4;
  }
}
</style>
