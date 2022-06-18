<template>
  <div class="flex items-center justify-between">
    <h1 class="text-4xl my-5">List of Users ({{ total }})</h1>
    <div class="pagination">
      <button :disabled="!hasPrev" @click="getPrev()">⟨</button>
      <button :disabled="!hasNext" @click="getNext()">⟩</button>
    </div>
  </div>
  <div class="users">
    <user
      v-for="user in users"
      :key="user.id"
      :fullName="`${user.first_name} ${user.last_name}`"
      :avatar="user.avatar"
      :email="user.email"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

import User from "@/components/User.vue";

export default {
  name: "HomePage",
  components: {
    User,
  },
  computed: {
    ...mapGetters({
      users: "users/getUsers",
      total: "users/getTotal",
      page: "users/getCurrentPage",
      totalPages: "users/getTotalPages",
    }),
    hasNext() {
      return this.page < this.totalPages;
    },
    hasPrev() {
      return this.page > 1;
    },
  },
  methods: {
    ...mapMutations({
      setCurrentPage: "users/setCurrentPage",
    }),
    ...mapActions({
      getUsers: "users/fetchUsers",
    }),
    getNext() {
      if (this.page < this.totalPages) {
        const currentPage = ++this.page;
        this.setCurrentPage(currentPage);
        this.getUsers();
      }
    },
    getPrev() {
      if (this.page > 1) {
        const currentPage = --this.page;
        this.setCurrentPage(currentPage);
        this.getUsers();
      }
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>

<style lang="postcss" scoped>
.users {
  @apply flex items-center justify-center flex-wrap;
}

.pagination {
  button {
    @apply py-1 px-3 bg-primary text-white mx-1 cursor-pointer rounded-sm;

    &[disabled] {
      @apply opacity-25 pointer-events-none;
    }
  }
}
</style>
