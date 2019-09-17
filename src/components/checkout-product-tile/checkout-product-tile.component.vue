<template>
  <div class="checkout-product-tile">
    <div class="checkout-product-tile__content"
          @click="goToProduct">
      <div class="content__item">
        <img :src="product.picture
            ? `${product.picture}.png`
             : 'https://wanowi.com/public/uploads/products/list/product-default.jpg'"
             alt="product"
             class="content__img">
      </div>
      <div class="content__item">
        <div class="content__description">
          <h3 class="content__description__title">{{product.title}}</h3>
          <p class="content__description__content">{{product.description}}</p>
        </div>
      </div>
      <div class="content__item content__quantity">
        <span class="content__quantity__decrease"
              @click.stop="decreaseAmount(product.id)">

          -
        </span>
        {{product.amount}}
        <span class="content__quantity__increase"
              @click.stop="increaseAmount(product.id)"
              :class="{ 'hide' :product.amount === product.quantity }">

          +
        </span>
      </div>
      <p class="content__item content__price">{{`$${product.price}`}}</p>
    </div>
    <p class="checkout-product-tile__close-btn"
        @click="removeFromCart(product.id)">

      &#215;
    </p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'checkout',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToProduct() {
      this.$router.push({ path: `/products/${this.product.categories}/${this.product.title}` });
    },
    ...mapMutations(['increaseAmount', 'decreaseAmount', 'removeFromCart']),
  },
};
</script>

<style scoped lang="scss">

.checkout-product-tile {
  position: relative;
  background-color: $white;

  &__content {
    display: grid;
    grid-template-columns: 20rem 40rem 10rem 10rem;
    height: 100%;
  }

  .content {
    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__price {
      color: $primary;
      font-weight: bold;
      letter-spacing: 4.5px;
      font-size: 2.8rem;
      padding-right: 1rem;
    }

    &__quantity {
      font-size: 2.5rem;

      &__decrease {
        margin-right: 1rem;
        font-size: 2.5rem;
        cursor: pointer;
      }
      &__increase {
        margin-left: 1rem;
        font-size: 2.5rem;
        cursor: pointer;
      }
    }

    &__description {
      padding-left: 2rem;

      &__title {
        font-size: 3rem;
        text-transform: uppercase;
        font-weight: 300;
        color: $black;
        letter-spacing: 0.75px;
      }

      &__content {
        margin-top: 1rem;
        color: $grey-400;
        letter-spacing: 4.5px;
        font-weight: 300;
        max-height: 3rem;
      }
    }

    &__img {
      max-height: 100%;
      max-width: 100%;
      width: auto;
      height: auto;
    }
  }

  &__close-btn {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    font-size: 3rem;
    padding: 0 1rem 1rem;
  }
}

.hide {
  display: none;
}
</style>
