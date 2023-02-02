import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  // {path:'*',
  // redirect:'/'},
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  // 管理员
  {
    //   path: "/home",
    //   name: "Home",
    //   component: () => import("../views/A/AdminHome.vue"),
    //   children: [
    //     {
    //       path: "/home/about",
    //       name: "About相关",
    //       component: () => import("../views/A/About.vue"),
    //     },
    //     {
    //       path: "/home/a",
    //       name: "A",
    //       component: () => import("../views/A/A.vue"),
    //     },
    //   ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
