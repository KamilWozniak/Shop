<template>
  <div class="products">
    <navigation />
    <div class="products__container">
      <div class="products__container__header">
        <h1 class="products__container__header__title">products</h1>
        <h4 class="products__container__header__category">
          {{currentCategory ? currentCategory : 'all categories'}}
        </h4>
      </div>
      <div class="products__container__product-list">

        <product-tile :key="product.id"
                      v-for="product in categoryProducts.slice(0, numberOfDisplayedProducts)"
                      :product="product"/>

      </div>
    </div>
    <app-menu />
  </div>
</template>

<script>
import Navigation from '../../components/navigation/navigation.vue';
import AppMenu from '../../components/app-menu/app-menu.vue';
import ProductTile from '../../components/product-tile/product-tile.vue';
import store from '../../store';

export default {
  name: 'products',
  components: {
    Navigation,
    AppMenu,
    ProductTile,
  },
  data() {
    return {
      currentCategory: this.$router.currentRoute.params.category ? this.$router.currentRoute.params.category : 'all',
      categoryProducts: [],
      numberOfDisplayedProducts: 6,

    };
  },
  methods: {
    showMoreProducts() {
      if (this.categoryProducts.length >= (this.numberOfDisplayedProducts + 6)) {
        this.numberOfDisplayedProducts += 6;
      }
      if (this.categoryProducts.length < (this.numberOfDisplayedProducts + 6)) {
        this.numberOfDisplayedProducts = this.categoryProducts.length;
      }
    },
  },
  computed: {
  },
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
    background-color: #f0f0f0;

    padding: 7rem 40rem 12rem 25rem;
    display: grid;
    grid-template-rows: 2fr 16fr 1fr;

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &__title {
        text-transform: uppercase;
        font-weight: 300;
        color: black;
        font-size: 7.2rem;
        letter-spacing: 0.18rem;

      }

      &__category {
        letter-spacing: 0.045rem;
        color: #c1c1c1;
        text-transform: uppercase;
        margin-right: 10rem;
      }
    }

    &__product-list {
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 5rem;
    }
  }
}

</style>
