import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue') // Load your Home view component
  },
  {
    path: '/category/:category',
    name: 'Category',
    component: () => import('../views/CategoryView.vue') // Load a Category view
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
