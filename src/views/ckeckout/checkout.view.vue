<template>
  <div class="checkout">
    <div v-if="!isCartEmpty"
         class="checkout__cart-items">

      <h1 class="cart-items__title">Your order:</h1>
      <div class="cart-items__list">
        <product-tile v-for="product in cart"
                      :key="product.id"
                      :product="product" />

      </div>
      <h2 class="cart-items__total">
        total:
        <span class="cart-items__total--thin-font">

            ${{getTotal()}}
          </span>
      </h2>
    </div>
    <div v-else
         class="checkout__empty-cart">

      <p class="empty-cart__message">Your cart is empty</p>
    </div>
    <p class="checkout__payment-form"></p>
  </div>
</template>

<script>
import * as firebase from 'firebase';
import ProductTile   from './components/checkout-product-tile.component.vue';

export default {
  name: 'checkout',
  components: {
    ProductTile,
  },
  computed: {
    cart() {
      return this.$store.state.checkoutStore.cart;
    },
    isCartEmpty() {
      return this.$store.state.checkoutStore.cart.length <= 0;
    },
  },
  methods: {
    getTotal() {
      let total = 0;
      this.$store.state.checkoutStore.cart.forEach((item) => {
        total += (parseFloat(item.price) * parseFloat(item.amount));
      });
      return total;
    },
  },
  beforeRouteEnter(to, from, next) {
    if (firebase.auth().currentUser !== null) {
      next();
    } else {
      next('/sign-in');
    }
  },
};
</script>

<style scoped lang="scss">
.checkout {
  padding: 8rem;
  background-color: $grey-100;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  &__empty-cart {
    display: flex;
    align-items: center;
    justify-content: center;

    .empty-cart {
      &__message {
        color: $black;
        text-transform: uppercase;
        font-weight: bolder;
        font-size: 8rem;
        opacity: 0.3;
        padding-bottom: 10rem;
        text-align: center;
      }
    }
  }

  &__cart-items {
    padding-left: 25rem;

    .cart-items {

      &__title {
        font-size: 7.2rem;
        letter-spacing: 1.8px;
        color: $black;
        font-weight: 300;
      }

      &__list {
        margin-top: 10rem;
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: 20rem;
        grid-gap: 3rem;
      }

      &__total {
        margin-top: 6rem;
        text-transform: capitalize;
        font-size: 7.2rem;
        letter-spacing: 1.8px;
        color: $black;
        font-weight: normal;

        &--thin-font {
          font-weight: 300;
          font-size: 7.2rem;
          margin-left: 1rem;
        }
      }
    }
  }
}
</style>
