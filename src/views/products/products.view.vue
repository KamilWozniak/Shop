<template>
  <div class="products">
    <div class="products__navigation">
      <div class="products__navigation--fixed">
        <navigation />
      </div>
    </div>
    <div class="products__container">
      <div class="container__header">
        <h1 class="container__header__title">products</h1>
        <h4 class="container__header__category">
          {{currentCategory}}
        </h4>
      </div>
      <div v-if="categoryProducts.length === 0"
           class="container__no-results">

        <h2>no products in this category</h2>
      </div>
      <div v-else
           class="container__product-list">

        <product-tile :key="product.id"
                      v-for="product in categoryProducts.slice(0, numberOfDisplayedProducts)"
                      :product="product"
                      @click.native="goToProduct(product.title)" />

      </div>
      <div class="container__button-wrapper">
        <button class="container__button"
                :class="{'container__button--hidden' : !isMore }"
                @click="showMoreProducts">

          show more products
        </button>
      </div>
    </div>
    <app-menu />
    <login-status />
  </div>
</template>

<script>
import Navigation  from '../../components/navigation/navigation.component.vue';
import AppMenu     from '../../components/app-menu/app-menu.component.vue';
import ProductTile from './components/product-tile.component.vue';
// eslint-disable-next-line import/no-cycle
import store       from '../../store/store';
import LoginStatus from '../../components/login-status/login-status.component.vue';

export default {
  name: 'products',
  components: {
    Navigation,
    AppMenu,
    ProductTile,
    LoginStatus,
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
      if (this.categoryProducts.length >= (this.numberOfDisplayedProducts + 6)) {
        this.numberOfDisplayedProducts += 6;
        return;
      }
      if (this.categoryProducts.length < (this.numberOfDisplayedProducts + 6)) {
        this.numberOfDisplayedProducts = this.categoryProducts.length;
      }
    },
    goToProduct(name) {
      this.$router.push({ path: `/products/${this.currentCategory}/${name}` });
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
  display: grid;
  grid-template-columns: $navbar-width 1fr;

  &__navigation {
    &--fixed {
      position: fixed;
      top:0;
      left: 0;
    }
  }

  &__container {
    background-color: $grey-100;
    padding: 6rem 20rem 7rem 25rem;
    display: grid;
    grid-template-rows: 20rem 1fr 4rem;
    min-height: 100vh;

    .container {

      &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 6rem;

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
          margin-right: 10rem;
        }
      }

      &__product-list {
        display: grid;
        grid-auto-rows: 45rem;
        grid-template-columns: repeat(3, 45rem);
        grid-gap: 5rem;
        padding-bottom: 3rem;
        justify-content: center;
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
  }
}

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
}
</style>
