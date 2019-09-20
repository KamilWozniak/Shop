// eslint-disable-next-line import/no-cycle

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
    searchForProducts({ commit, rootState }, searchQuery) {
      // eslint-disable-next-line arrow-body-style
      const results = rootState.products.filter((item) => {
        return item.title.toLowerCase().includes(searchQuery)
          || item.description.toLowerCase().includes(searchQuery)
          || item.categories.toLowerCase().includes(searchQuery)
          || item.price.toString() === searchQuery;
      });
      commit('setResults', results);
    },
  },
};
