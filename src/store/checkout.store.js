export default {
  state: {
    cart: [],
  },
  mutations: {
    addToCart(state, item) {
      state.cart = [...state.cart, item];
    },
    checkIfInCart(state, id) {
      state.cart.find(item => item.id === id);
    },
  },
  getters: {
    inCart: state => id => state.cart.find(item => item.id === id),
  },
  actions: {},
};
