export default {
  state: {
    cart: [],
  },
  mutations: {
    addToCart(state, item) {
      if (item.amount === 0) {
        return;
      }

      if (state.cart.find(product => product.id === item.id)) {
        const index = state.cart.findIndex(product => product.id === item.id);

        if (state.cart[index].amount >= state.cart[index].quantity) {
          return;
        }
        if (item.amount) {
          state.cart[index].amount += item.amount;
        } else {
          state.cart[index].amount += 1;
        }
      } else if (!item.amount) {
        const newItem = {
          ...item,
          amount: 1,
        };
        state.cart = [...state.cart, newItem];
      } else {
        state.cart = [...state.cart, item];
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
};
