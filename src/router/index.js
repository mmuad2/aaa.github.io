import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Layout from "../views/Layout.vue";
import Home from "../views/Home.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  {
    path: "/app",
    component: Layout,
    children: [{ path: "home", component: Home }],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
