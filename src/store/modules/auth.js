import Cookies from "js-cookie";

export default {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false,
      token: null,
      loginSuccess: false,
      loginFailed: false,
    };
  },
  getters: {
    getToken(state) {
      return state.token;
    },
    getLoginStatus(state) {
      const { isLoggedIn, loginSuccess, loginFailed } = state;
      return {
        isLoggedIn,
        loginSuccess,
        loginFailed,
      };
    },
  },
  mutations: {
    setToken(state, token) {
      Cookies.set("token", token);
      state.token = token;
    },
    setLoginStatus(state, success) {
      state.isLoggedIn = success;
      state.loginSuccess = success;
      state.loginFailed = !success;
    },
  },
  actions: {
    login({ commit }, payload) {
      return new Promise((resolve, reject) => {
        fetch("https://reqres.in/api/login", {
          method: "POST",
          body: JSON.stringify(payload),
        })
          .then((res) => res.json())
          .then(() => {
            commit("setToken", "QpwL5tke4Pnpja7X4");
            commit("setLoginStatus", true);
            resolve();
          })
          .catch((err) => {
            console.error(err);
            commit("setLoginStatus", false);
            reject();
          });
      });
    },
    register({ commit }, payload) {
      return new Promise((resolve, reject) => {
        fetch("https://reqres.in/api/register", {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(payload),
        })
          .then((res) => res.json())
          .then(() => {
            commit("setToken", "QpwL5tke4Pnpja7X4");
            commit("setLoginStatus", true);
            resolve();
          })
          .catch((err) => {
            console.error(err);
            commit("setLoginStatus", false);
            reject();
          });
      });
    },
  },
};
