<template>
  <div class="product-tile__wrapper">
    <div class="product-tile">
      <div class="product-tile__image-wrapper">
        <img class="product-tile__image"
             :src="product.picture
            ? `${product.picture}.png`
             : 'https://wanowi.com/public/uploads/products/list/product-default.jpg'"
             alt="product">

      </div>
      <div class="product-tile__description">
        <p class="product-tile__description__title">{{product.title}}</p>
        <p class="product-tile__description__content">{{product.description}}</p>
        <p class="product-tile__description__price">{{`$${product.price}`}}</p>
      </div>
    </div>
    <button @click.stop="addToCart"
            class="product-tile__btn"
            :class="{'product-tile__btn--disabled product-tile__btn--black': product.quantity === 0,
                      'product-tile__btn--disabled' : !checkIfCanOrderMore()}">

      {{product.quantity > 0 ? 'add to cart' : 'out of stock'}}
    </button>
    <span class="product-tile__info">{{inCart ? 'In Cart' : ''}}</span>
  </div>
</template>

<script>
export default {
  name: 'product-tile',
  props: {
    product: {
      type: Object,
    },
  },
  computed: {
    inCart: {
      get() {
        return this.$store.getters.inCart(this.product.id);
      },
      set() {
      },
    },
  },
  methods: {
    addToCart() {
      if (this.product.quantity > 0) {
        this.$store.commit('addToCart', this.product);
      }
    },
    checkIfCanOrderMore() {
      if (this.inCart) {
        const index = this.$store.state.checkoutStore.cart
          .findIndex(product => product.id === this.product.id);
        if (this.$store.state.checkoutStore.cart[index].amount
          >= this.$store.state.checkoutStore.cart[index].quantity) {
          return false;
        }
      }
      return true;
    },
  },
};
</script>

<style scoped lang="scss">

.product-tile {
  background-color: $white;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 28rem 15rem;
  cursor: pointer;
  padding: 1rem;

  &:hover {
    box-shadow: 2.5rem 2.5rem 2.5rem 0 rgba(219, 219, 219, 0.5);
  }

  &__wrapper {
    position: relative;
    overflow: hidden;
  }

  &__btn {
    position: absolute;
    top: 0;
    right: 0;
    text-transform: uppercase;
    background: $primary;
    color: $white;
    border: none;
    border-radius: 0 0 0 1rem;
    padding: 1rem;
    cursor: pointer;

    &--black {
      color: $black;
    }

    &--disabled {
      background-color: lighten($primary, 30);
      cursor: unset;
    }
  }

  &__info {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 3rem;
    padding: 1rem;
    color: $grey-400;
  }

  &__image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image {
    max-height: 100%;
    max-width: 100%;
    width: auto;
    height: auto;
  }

  &__description {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    padding: 1rem 5rem;

    &__title {
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 300;
      color: $black;
      letter-spacing: 0.075rem;
    }

    &__content {
      margin-top: 1rem;
      color: $grey-400;
      letter-spacing: 4.5px;
      font-weight: 300;
      max-height: 3rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 100%;
      display: block;
      overflow: hidden;
    }

    &__price {
      margin-top: 2rem;
      color: $primary;
      font-weight: bold;
      letter-spacing: 4.5px;
    }
  }
}


@media screen and (max-width: $end-of-medium-screen) {
  .product-tile {
    &__description {
      padding: 1rem 2rem;

      &__title {
        font-size: 2rem;
      }
    }
  }
}

@media screen and (max-width: $end-of-small-screen) {
  .product-tile {
    &__description {
      padding: 1rem 2rem;

      &__title {
        font-size: 3rem;
      }
    }
  }
}

</style>
