import { createWebHistory, createRouter } from "vue-router";
import Detail from "./components/Detail.vue";
import Main from "./components/Main.vue";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/detail/:id(\\d+)",
    component: Detail,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 