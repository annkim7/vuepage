import { createWebHistory, createRouter } from "vue-router";
import Detail from "./components/Detail.vue";
// import Detail00 from './components/Detail00.vue';
import Detail20Exhi from './components/Detail20Exhi.vue';
import Main from "./components/Main.vue";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/detail/:id(\\d+)",
    component: Detail,
  },
  {
    path: "/detail/20/:id(\\d+)",
    component: Detail20Exhi,
    
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 