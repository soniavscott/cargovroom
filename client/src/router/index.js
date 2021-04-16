import Vue from "vue";
import VueRouter from "vue-router";
import BrowseVehicles from "../views/BrowseVehicles.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "BrowseVehicles",
    component: BrowseVehicles
  },
  {
    path: "/search/:make",
    name: "BrowseVehicles",
    component: BrowseVehicles
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
