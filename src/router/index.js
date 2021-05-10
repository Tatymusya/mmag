import Vue from 'vue';
import VueRouter from 'vue-router';
import MmagHome from '@/pages/Home';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MmagHome,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '',
  routes,
});

Vue.use(VueRouter);

export default router;
