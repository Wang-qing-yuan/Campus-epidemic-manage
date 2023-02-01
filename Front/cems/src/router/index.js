import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue"
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views"),
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/home/about",
        name: "About相关",
        component: () => import("../views/About.vue"),
      },
      {
        path: "/home/a",
        name: "A",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/A.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
