<template>
  <div class="products">

    <div class="products__header">
      <h1 class="header__title">products</h1>
      <h4 class="header__category">
        {{currentCategory}}
      </h4>
    </div>

    <div v-if="categoryProducts.length === 0"
         class="products__no-results">

      <h2>no products in this category</h2>
    </div>

    <div v-else
         class="products__product-list">

      <product-tile :key="product.id"
                    class="product-list__item"
                    :product="product"
                    v-for="product in categoryProducts.slice(0, numberOfDisplayedProducts)"
                    @click.native="goToProduct(product)" />

    </div>

    <div class="products__button-wrapper">
      <button class="products__button"
              :class="{'products__button--hidden' : !isMore }"
              @click="showMoreProducts">

        show more products
      </button>
    </div>
  </div>
</template>

<script>
import productTile from '@/components/s-product-tile/s-product-tile.component.vue';
// eslint-disable-next-line import/no-cycle
import store       from '../../store/store';

export default {
  name: 'products',
  components: {
    productTile,
  },
  data() {
    return {
      currentCategory: this.$router.currentRoute.params.category
        ? this.$router.currentRoute.params.category
        : 'all categories',
      categoryProducts: [],
      numberOfDisplayedProducts: 6,
    };
  },
  methods: {
    showMoreProducts() {
      const DEFAULT_NUMBER_OF_ITEMS = 6;
      if (this.categoryProducts.length >= (this.numberOfDisplayedProducts
        + DEFAULT_NUMBER_OF_ITEMS)) {
        this.numberOfDisplayedProducts += DEFAULT_NUMBER_OF_ITEMS;
        return;
      }
      if (this.categoryProducts.length < (this.numberOfDisplayedProducts
        + DEFAULT_NUMBER_OF_ITEMS)) {
        this.numberOfDisplayedProducts = this.categoryProducts.length;
      }
    },
    goToProduct(product) {
      // this.$router.push({ path: `/products/${this.currentCategory}/${name}` });
      this.$router.push({
        name: 'product-details',
        params: {
          category: product.categories,
          // product,
          productId: product.id,
        },
      });
    },
  },
  computed: {
    isMore() {
      return this.categoryProducts.length > this.numberOfDisplayedProducts;
    },
  },
  created() {
    store.commit('filterProducts', this.currentCategory);
    this.categoryProducts = store.state.productsStore.filteredProducts;
  },
  async beforeRouteEnter(to, from, next) {
    const route = to.params.category ? to.params.category : 'all categories';
    if (store.state.products.length === 0) {
      await store.dispatch('fetchProducts');
    }
    store.commit('filterProducts', route);
    next();
  },
};
</script>

<style scoped lang="scss">
.products {
  background-color: $grey-100;
  padding: 6rem 20rem 7rem 15rem;
  display: grid;
  grid-template-rows: 20rem 1fr 4rem;
  min-height: 100vh;


  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 6rem;

    .header {

      &__title {
        text-transform: uppercase;
        font-weight: 300;
        color: $black;
        font-size: 7.2rem;
        letter-spacing: 1.8px;
      }

      &__category {
        letter-spacing: 4.5px;
        color: $grey-300;
        text-transform: uppercase;
        margin-left: 2rem;
      }
    }
  }

  &__product-list {
    display: grid;
    grid-auto-rows: auto;
    grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
    grid-gap: 5rem;
    padding-bottom: 3rem;
    justify-content: center;

    .product-list {

      &__item {
        max-height: 45rem;
      }
    }
  }

  &__button-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  &__button {
    border: none;
    text-transform: uppercase;
    background-color: unset;
    cursor: pointer;
    color: $primary;

    &:focus {
      outline: none;
    }

    &:hover {
      text-decoration: underline;
    }

    &--hidden {
      display: none;
    }
  }

  &__no-results {
    display: flex;
    align-items: center;
    justify-content: center;

    & > * {
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

/*
@media screen and (max-width: $end-of-large-screen) and (min-width: $end-of-medium-screen + 1) {
  .products {
    grid-template-columns: $navbar-width-lg 1fr;

    &__container {
      grid-template-rows: 8rem 1fr 6rem;
      padding: 6rem 10rem 7rem 7rem;
      min-height: 100vh;
    }

    .container {

      &__header {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;

        &__title {
          font-size: 6rem;
        }

        &__category {
          margin-right: 0;
        }
      }

      &__no-results {
        & > * {
          font-size: 4rem;
          opacity: 0.3;
        }
      }

      &__product-list {
        display: grid;
        grid-template-columns: repeat(2, calc(40vw - #{$navbar-width-md}));
        grid-gap: 3rem;
        padding-bottom: 3rem;
        padding-top: 3rem;
      }

      &__button {
        padding-bottom: 1rem;
      }
    }
  }
}


@media screen and (max-width: $end-of-medium-screen) and (min-width: $end-of-small-screen + 1) {
  .products {
    grid-template-columns: $navbar-width-md 1fr;

    &__container {
      padding: 1rem;
      grid-template-rows: 8rem 1fr 4rem;
    }

    .container {

      &__header {
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;

        &__title {
          font-size: 3rem;
        }

        &__category {
          margin-right: 0;
        }
      }

      &__no-results {
        & > * {
          font-size: 2rem;
          opacity: 0.3;
        }
      }

      &__product-list {
        display: grid;
        grid-template-columns: repeat(2, calc(50vw - #{$navbar-width-md}));
        grid-gap: 3rem;
        padding-bottom: 3rem;
        padding-top: 3rem;
      }

      &__button {
        padding-bottom: 1rem;
      }
    }
  }
}

@media screen and (max-width: $end-of-small-screen) {
  .products {
    grid-template-rows: $navbar-width-sm 1fr;
    grid-template-columns: 1fr;


    &__container {
      min-height: calc(100vh - #{$navbar-width-sm});
      padding: 0;
      grid-template-rows: 8rem 1fr 2rem;
    }

    .container {

      &__header {
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;

        &__title {
          font-size: 3rem;
        }

        &__category {
          margin-right: 0;
        }
      }

      &__no-results {
        & > * {
          font-size: 2rem;
          opacity: 0.3;
        }
      }

      &__product-list {
        grid-template-columns: 90vw;
        grid-gap: 3rem;
        padding-bottom: 3rem;
        padding-top: 1rem;
      }

      &__button {
        padding-bottom: 1rem;
      }
    }
  }
} */
</style>
