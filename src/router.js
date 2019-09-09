import Vue              from 'vue';
import Router           from 'vue-router';
import Home             from './views/home/home.vue';
import Products         from './views/products/products.vue';
import Search           from './views/search/search.vue';
import Checkout         from './views/ckeckout/checkout.vue';
import ProductDetails   from './views/product-details/product-details.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
    },
    {
      path: '/product-details',
      name: 'product-details',
      component: ProductDetails,
    },
  ],
});
