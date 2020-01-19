import * as Services from '../../../services/api.services';

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

    // increaseAmount(state, payload) {
    //   const index = state.cart.findIndex(product => product.id === payload.id);
    //   state.cart[index].amount = payload.amount;
    // },
    // decreaseAmount(state, payload) {
    //   const index = state.cart.findIndex(product => product.id === payload.id);
    //   if (state.cart[index].amount === 1) {
    //     state.cart.splice(index, 1);
    //   } else {
    //     state.cart[index].amount = payload.amount;
    //   }
    // },
    setAmount(state, payload) {
      const index = state.cart.findIndex(product => product.id === payload.id);
      // if (payload.action === 'SUBTRACT' && state.cart[index].amount === 1) {
      //   state.cart.splice(index, 1);
      // } else {
      // if (state.cart[index]) {
      state.cart[index].amount = payload.amount;
      // }
      // }
    },
    removeFromCart(state, id) {
      const index = state.cart.findIndex(product => product.id === id);
      state.cart.splice(index, 1);
    },
    setCartItems(state, payload) {
      state.cart = payload;
    },
  },
  actions: {
    async setCartItems({ state }) {
      try {
        await Services.setCartItems(state.cart);
      } catch (e) {
        throw Error;
      }
    },
    async getCartItems({ commit }) {
      try {
        const response = await Services.fetchCartItems();
        commit('setCartItems', response.data.cartItems);
      } catch (e) {
        throw Error;
      }
    },
    // async increaseAmount({ commit, dispatch }, payload) {
    //   commit('increaseAmount', payload);
    //   await dispatch('setCartItems');
    // },
    // async decreaseAmount({ commit, dispatch }, payload) {
    //   commit('decreaseAmount', payload);
    //   await dispatch('setCartItems');
    // },
    async setAmount({ commit, dispatch }, payload) {
      if (!payload.productRemoved) {
        commit('setAmount', payload);
      }
      await dispatch('setCartItems');
    },
  },
  getters: {
    inCart: state => id => state.cart.find(item => item.id === id),
  },
};
