import { createStore } from "vuex";

import auth from "./modules/auth";
import users from "./modules/users";

const store = createStore({
  modules: {
    auth,
    users,
  },
  state() {
    return {
      name: "test",
    };
  },
});

export default store;
