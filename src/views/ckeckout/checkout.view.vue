<template>
  <div class="checkout">
    <div class="checkout__navigation">
      <div class="checkout__navigation--fixed">
<!--        <navigation />-->
      </div>
    </div>
    <div class="checkout__content">
      <div v-if="!isCartEmpty"
           class="content__cart-items">

        <h1 class="content__cart-items__title">Your order:</h1>
        <div class="content__cart-items__list">
          <product-tile v-for="product in cart"
                        :key="product.id"
                        :product="product" />

        </div>
        <h2 class="content__cart-items__total">
          total:
          <span class="content__cart-items__total--thin-font">

            ${{getTotal()}}
          </span>
        </h2>
      </div>
      <div v-else
           class="checkout__content__empty-cart" >

        <p class="content__empty-cart__message">Your cart is empty</p>
      </div>
      <p class="content__form"> </p>
    </div>
    <login-status />
  </div>
</template>

<script>
import * as firebase from 'firebase';
import ProductTile from './components/checkout-product-tile.component.vue';
import LoginStatus from '../../components/login-status/login-status.component.vue';

export default {
  name: 'checkout',
  components: {
    ProductTile,
    LoginStatus,
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
    display: grid;
    grid-template-columns: $navbar-width 1fr;

    &__navigation {
      &--fixed {
        position: fixed;
        top:0;
        left: 0;
      }
    }

    &__content {
      padding: 8rem;
      background-color: $grey-100;
      min-height: 100vh;
      display: grid;
      grid-template-columns: 1fr 1fr;

      &__empty-cart {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .content {

      &__cart-items {
        padding-left: 25rem;

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

      &__empty-cart__message {
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

</style>
