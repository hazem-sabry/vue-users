<template>
  <h1>Home page</h1>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HomePage",
  computed: {
    ...mapState({
      name: "name",
    }),
  },
};
</script>
