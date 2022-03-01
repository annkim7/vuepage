import { createWebHistory, createRouter } from "vue-router";
import Detail from "./components/Detail.vue";
import Detail11Spea from './components/Detail11Spea.vue';
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
  {
    path: "/detail/11/:id(\\d+)",
    component: Detail11Spea,
    
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 