<template>
  <div class="products">
    <navigation />
    <div class="products__container">
      <div class="container__header">
        <h1 class="container__header__title">products</h1>
        <h4 class="container__header__category">
          {{currentCategory}}
        </h4>
      </div>
      <div v-if="categoryProducts.length === 0"
           class="container__no-results">

        <h2>brak dostępnych przedmiotów w sklepie</h2>
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
                @click="showMoreProducts">

          show more products
        </button>
      </div>
    </div>
    <app-menu />
  </div>
</template>

<script>
import Navigation  from '../../components/navigation/navigation.vue';
import AppMenu     from '../../components/app-menu/app-menu.vue';
import ProductTile from '../../components/product-tile/product-tile.vue';
import store       from '../../store';

export default {
  name: 'products',
  components: {
    Navigation,
    AppMenu,
    ProductTile,
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
  computed: {},
  created() {
    store.commit('filterProducts', this.currentCategory);
    this.categoryProducts = store.state.filteredProducts;
  },
};
</script>

<style scoped lang="scss">
.products {
  display: grid;
  grid-template-columns: $navbar-width 1fr;

  &__container {
    background-color: $grey-100;
    padding: 6rem 20rem 7rem 25rem;
    display: grid;
    grid-template-rows: 20rem 1fr 4rem;

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
          letter-spacing: 0.18rem;
        }

        &__category {
          letter-spacing: 0.045rem;
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
      }

      &__no-results {
        display: flex;
        align-items: center;
        justify-content: center;

        & > * {
          color: black;
          text-transform: uppercase;
          font-weight: bolder;
          font-size: 15rem;
          opacity: 0.3;
          padding-bottom: 10rem;
          text-align: center;
        }
      }
    }
  }
}

</style>
