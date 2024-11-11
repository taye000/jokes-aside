import { createRouter, createWebHistory } from "vue-router";
import JokeDetail from "../components/JokeDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"), // Load your Home view component
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/AboutView.vue"), // Load about view
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
