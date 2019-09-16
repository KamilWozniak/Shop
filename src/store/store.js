import Vue   from 'vue';
import Vuex  from 'vuex';
import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import productsStore from './products.store';
import checkoutStore from './checkout.store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    checkoutStore,
    productsStore,
  },
  state: {
    CATEGORIES_CDN_URL: 'https://api.myjson.com/bins/oqr65',
    PRODUCTS_CDN_URL: 'https://api.myjson.com/bins/kafkd',
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
      await axios.get(this.state.CATEGORIES_CDN_URL)
        .then(response => commit('setCategories', response.data.categories))
        .catch(e => console.log(e));
    },
    async fetchProducts({ commit }) {
      await axios.get(this.state.PRODUCTS_CDN_URL)
        .then(response => commit('setProducts', response.data.products))
        .catch(e => console.log(e));
    },
  },
});
