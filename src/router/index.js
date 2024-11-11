import { createRouter, createWebHistory } from "vue-router";
import JokeDetail from "../components/JokeDetail.vue"; // Direct import of JokeDetail component disables Lazy Loading

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"), // Dynamic import of homeview component enables Lazy Loading
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/AboutView.vue"), // Dynamic import of homeview component enables Lazy Loading
  },
  {
    path: "/joke/:id", // Define the route with a dynamic `id` parameter
    name: "JokeDetail",
    component: JokeDetail,
    props: true, // Pass route params as props
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
