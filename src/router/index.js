import { createRouter, createWebHistory, VueRouter } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ServiceView from "../views/ServiceView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import EventView from "../views/EventView.vue";
import CareerView from "../views/CareerView.vue";
import CareerDetailView from "../views/CareerDetailView.vue";
import BlogView from "../views/BlogView.vue";
import ContactView from "../views/ContactView.vue";
import PortfolioDetailView from "../views/PortfolioDetailView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/service",
    name: "service",
    component: ServiceView,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: PortfolioView,
  },
  {
    path: "/portfolio/detail",
    name: "portfolio-detail",
    component: PortfolioDetailView,
  },
  {
    path: "/events",
    name: "event",
    component: EventView,
  },
  {
    path: "/career",
    name: "career",
    component: CareerView,
  },
  {
    path: "/career/detail",
    name: "career-detail",
    component: CareerDetailView,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
});

export default router;