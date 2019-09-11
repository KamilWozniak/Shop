import Vue   from 'vue';
import Vuex  from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    CATEGORIES_CDN_URL: 'https://api.myjson.com/bins/oqr65',
    PRODUCTS_CDN_URL: 'https://api.myjson.com/bins/kafkd',
    categories: [],
    products: [],
    filteredProducts: [],
  },
  mutations: {
    // eslint-disable-next-line no-return-assign
    setCategories: (state, newCategories) => (state.categories = newCategories),
    // eslint-disable-next-line no-return-assign
    setProducts: (state, newProducts) => (state.products = newProducts),
    filterProducts: (state, category) => {
      if (category !== 'all categories') {
        state.filteredProducts = state.products
          .filter(product => product.categories === category);
      } else {
        state.filteredProducts = state.products;
      }
    },
  },
  actions: {
    fetchCategories({ commit }) {
      axios.get(this.state.CATEGORIES_CDN_URL)
        .then(response => commit('setCategories', response.data.categories))
        .catch(e => console.log(e));
    },
    fetchProducts({ commit }) {
      axios.get(this.state.PRODUCTS_CDN_URL)
        .then(response => commit('setProducts', response.data.products))
        .catch(e => console.log(e));
    },
  },
});
