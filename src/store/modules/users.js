export default {
  namespaced: true,
  state() {
    return {
      users: [],
      page: 1,
      total: 0,
      perPage: 0,
      totalPages: 0,
    };
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
    getCurrentPage(state) {
      return state.page;
    },
    getTotal(state) {
      return state.total;
    },
    getNumUsersPerPage(state) {
      return state.perPage;
    },
    getTotalPages(state) {
      return state.totalPages;
    },
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setCurrentPage(state, page) {
      state.page = page;
    },
    setTotal(state, total) {
      state.total = total;
    },
    setTotalPages(state, total) {
      state.totalPages = total;
    },
    setPerPage(state, perPage) {
      state.perPage = perPage;
    },
  },
  actions: {
    fetchUsers({ getters, commit }) {
      return new Promise((resolve, reject) => {
        fetch(`https://reqres.in/api/users?page=${getters.getCurrentPage}`)
          .then((res) => res.json())
          .then((data) => {
            commit("setUsers", data.data);
            commit("setCurrentPage", data.page);
            commit("setTotal", data.total);
            commit("setTotalPages", data.total_pages);
            commit("setPerPage", data.per_page);
            resolve();
          })
          .catch((error) => {
            console.error(error);
            reject();
          });
      });
    },
  },
};
