import { createStore } from "vuex";

import auth from "./modules/auth";

const store = createStore({
  modules: {
    auth,
  },
  state() {
    return {
      name: "test",
    };
  },
});

export default store;
