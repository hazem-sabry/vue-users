import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    component: Home,
    alias: "/users",
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/login",
    component: () => import("@/pages/login.vue"),
  },
  {
    path: "/register",
    component: () => import("@/pages/register.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  const logisStatus = store.getters["auth/getLoginStatus"];
  if (to.meta.requireAuth && !logisStatus.isLoggedIn) {
    return { path: "login" };
  }
});

export default router;
