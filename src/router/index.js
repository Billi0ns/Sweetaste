import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

// Lazy loading
const Products = () => import('../views/Products.vue');
const Login = () => import('../views/Login.vue');
const Cart = () => import('../views/Cart.vue');
const Checkout1 = () => import('../views/Checkout-1.vue');

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
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/checkout-1',
    name: 'Checkout1',
    component: Checkout1,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
