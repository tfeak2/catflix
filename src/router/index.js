import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: () =>
      import("../views/Home.vue"),
  },
  {
    path: "/",
    name: "Login",
    component: () =>
      import("../views/Login.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () =>
      import("../views/Cart.vue"),
  },
  {
    path: "/account",
    name: "Account",
    component: () =>
      import("../views/Account.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () =>
      import("../views/Search.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
