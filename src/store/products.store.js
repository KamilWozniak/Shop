// eslint-disable-next-line import/no-cycle
import store from './store';

export default {
  state: {
    filteredProducts: [],
  },
  mutations: {
    filterProducts: (state, category) => {
      if (category !== 'all categories') {
        state.filteredProducts = store.state.products
          .filter(product => product.categories === category);
      } else {
        state.filteredProducts = store.state.products;
      }
    },
  },
};
