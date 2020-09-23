import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

// Lazy loading
const Products = () => import('../views/Products.vue');
const Login = () => import('../views/Login.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
