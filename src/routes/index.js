import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home.vue";

const routes = [
  {
    path: "/",
    component: Home,
    alias: "/users",
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

export default router;
