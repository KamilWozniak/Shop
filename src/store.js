import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    CATEGORIES_CDN_URL: 'http://myjson.com/oqr65',
    PRODUCTS_CDN_URL: 'http://myjson.com/kafkd',
    categories: [],
    products: [],
  },
  mutations: {
    // eslint-disable-next-line no-return-assign
    setCategories: (state, newCategories) => (state.categories = newCategories),
  },
  actions: {
    fetchCategories({ commit }) {
      axios.get('https://api.myjson.com/bins/oqr65')
        .then(response => commit('setCategories', response.data.categories))
        .catch(e => console.log(e));
    },
  },
});
