import { createWebHistory, createRouter } from "vue-router";
import Detail from "./components/Detail.vue";
import Detail11Spea from './components/Detail11Spea.vue';
import Detail20Exhi from './components/Detail20Exhi.vue';
import Detail21List from './components/Detail21List.vue';
import Detail23Vide from './components/Detail23Vide.vue';
import Main from "./components/Main.vue";

const routes = [
  {
    path: "/vuepage",
    component: Main,
  },
  {
    path: "/vuepage/detail/:id(\\d+)",
    component: Detail,
  },
  {
    path: "/vuepage/detail/20/:id(\\d+)",
    component: Detail20Exhi,
    
  },
  {
    path: "/vuepage/detail/11/:id(\\d+)",
    component: Detail11Spea,
    
  },
  {
    path: "/vuepage/detail/21/:id(\\d+)",
    component: Detail21List,
    
  },
  {
    path: "/vuepage/detail/23/:id(\\d+)",
    component: Detail23Vide,
    
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 