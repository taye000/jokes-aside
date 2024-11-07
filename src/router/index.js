import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue') // Load your Home view component
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue') // Load about view
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
