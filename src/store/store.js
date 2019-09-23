import Vue                                from 'vue';
import Vuex                               from 'vuex';
// eslint-disable-next-line import/no-cycle
import productsStore                      from '../views/products/store/products.store';
import checkoutStore                      from '../views/ckeckout/store/checkout.store';
import searchStore                        from '../views/search/search.store';
import loginStore                         from '../views/sign-up/login.store';
import { fetchProducts, fetchCategories } from '@/services/api.services';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    checkoutStore,
    productsStore,
    searchStore,
    loginStore,
  },
  state: {
    categories: [],
    products: [],
  },
  mutations: {
    // eslint-disable-next-line no-return-assign
    setCategories: (state, newCategories) => (state.categories = newCategories),
    // eslint-disable-next-line no-return-assign
    setProducts: (state, newProducts) => (state.products = newProducts),
  },
  actions: {
    async fetchCategories({ commit }) {
      await fetchCategories()
        .then(response => commit('setCategories', response.data.categories))
        .catch(e => console.log(e));
    },
    async fetchProducts({ commit }) {
      await fetchProducts()
        .then(response => commit('setProducts', response.data.products))
        .catch(e => console.log(e));
    },
  },
});
