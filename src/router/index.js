import { createRouter, createWebHistory } from 'vue-router';
import Acceuil from '../components/Acceuil.vue';
import Card from '../components/Card.vue';
import Cardexport from '../components/Cardexport.vue';

const routes = [
  { path: '/', component: Acceuil },
  { path: '/createcard', component: Card },
  
  {
    path: '/preview',
    name: 'Cardexport',
    component: Cardexport,
    props: route => ({
      rectoImage: route.query.rectoImage,
      versoImage: route.query.versoImage
    })
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
