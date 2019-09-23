<template>
  <div class="checkout-product-tile">
    <div class="checkout-product-tile__content"
         @click="goToProduct">

      <div class="content__item">
        <img :src="image"
             alt="product"
             class="item__img">

      </div>
      <div class="content__item">
        <div class="item__description">
          <h3 class="item__description__title">

            {{product.title}}
          </h3>
          <p class="item__description__content">

            {{product.description}}
          </p>
        </div>
      </div>
      <div class="content__item item__quantity">
        <span class="item__quantity__decrease"
              @click.stop="decreaseAmount(product.id)">

          <span>-</span>
        </span>
        {{product.amount}}
        <span class="item__quantity__increase"
              @click.stop="increaseAmount(product.id)"
              :class="{ 'hide'
               :product.amount === product.quantity }">

          <span>+</span>
        </span>
      </div>
      <p class="content__item item__price">

        {{`$${product.price}`}}
      </p>
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
  computed: {
    image() {
      return this.product.picture
        ? `${this.product.picture}.png`
        : 'https://wanowi.com/public/uploads/products/list/product-default.jpg';
    },
  },
};
</script>

<style scoped lang="scss">

.checkout-product-tile {
  position: relative;
  background-color: $white;
  cursor: pointer;

  &__close-btn {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    font-size: 3rem;
    padding: 0 1rem 1rem;
  }

  &__content {
    display: grid;
    grid-template-columns: 20rem 40rem 10rem 10rem;
    height: 100%;

    .content__item {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .item {
      &__quantity {
        font-size: 2.5rem;

        &__decrease > span {
          margin-right: 1rem;
          font-size: 2.5rem;
          cursor: pointer;
          width: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;

          &:hover {
            background-color: $grey-200;
            border-radius: 1rem;
          }
        }

        &__increase > span {
          margin-left: 1rem;
          font-size: 2.5rem;
          cursor: pointer;
          width: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;

          &:hover {
            background-color: $grey-200;
            border-radius: 1rem;
          }
        }
      }

      &__img {
        max-height: 100%;
        max-width: 100%;
        width: auto;
        height: auto;
      }

      &__price {
        color: $primary;
        font-weight: bold;
        letter-spacing: 4.5px;
        font-size: 2.8rem;
        padding-right: 1rem;
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
    }
  }
}
.hide {
  display: none;
}
</style>
