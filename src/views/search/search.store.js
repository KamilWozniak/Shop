// eslint-disable-next-line import/no-cycle
import store from '../../store/store';

export default {
  state: {
    searchResults: [],
  },
  mutations: {
    setResults(state, results) {
      state.searchResults = results;
    },
  },
  actions: {
    searchForProducts({ commit }, searchQuery) {
      // eslint-disable-next-line arrow-body-style
      const results = store.state.products.filter((item) => {
        return item.title.toLowerCase().includes(searchQuery)
          || item.description.toLowerCase().includes(searchQuery)
          || item.categories.toLowerCase().includes(searchQuery)
          || item.price.toString().includes(searchQuery);
      });
      commit('setResults', results);
    },
  },
};
