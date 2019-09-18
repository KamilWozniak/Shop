export default {
  state: {
    cart: [],
  },
  mutations: {
    addToCart(state, item) {
      if (state.cart.find(product => product.id === item.id)) {
        const index = state.cart.findIndex(product => product.id === item.id);
        if (state.cart[index].amount >= state.cart[index].quantity) {
          return;
        }
        state.cart[index].amount += 1;
      } else {
        const newItem = {
          ...item,
          amount: 1,
        };
        state.cart = [...state.cart, newItem];
      }
    },

    increaseAmount(state, id) {
      const index = state.cart.findIndex(product => product.id === id);
      state.cart[index].amount += 1;
    },
    decreaseAmount(state, id) {
      const index = state.cart.findIndex(product => product.id === id);
      if (state.cart[index].amount === 1) {
        state.cart.splice(index, 1);
      } else {
        state.cart[index].amount -= 1;
      }
    },
    removeFromCart(state, id) {
      const index = state.cart.findIndex(product => product.id === id);
      state.cart.splice(index, 1);
    },
  },
  getters: {
    inCart: state => id => state.cart.find(item => item.id === id),
  },
  actions: {},
};
