// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Acceuil from '../components/Acceuil.vue';
import Card from '../components/Card.vue';

const routes = [
  { path: '/', component: Acceuil },
  { path: '/createcard', component: Card },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
