<template>
  <div class="search">
    <div class="search__navigation">
      <div class="search__navigation--fixed">
        <navigation />
      </div>
    </div>
    <div class="search__content">
      <form @submit.prevent="search"
            class="search__form">

        <input class="search__form__input"
               type="text"
               v-model="searchValue">

        <button type="button"
                class="search__form__button"
                @click="clearSearch">

          &#215;
        </button>
        <div class="search__form__info">
          Type product that you are looking for
        </div>
      </form>
      <div class="search__item-list">
        <product-tile v-for="product in this.$store.state.searchStore.searchResults"
                      :product="product"
                      :key="product.id"
                      @click.native="goToProduct(product.categories, product.title)"/>

      </div>
      <div class="search__results-counter"
           :class="{'search__results-counter--hide': !resultsNumber}">

        {{resultsNumber}} searched results
      </div>
    </div>
    <app-menu />
  </div>
</template>

<script>
import Navigation   from '../../components/navigation/navigation.component.vue';
import AppMenu      from '../../components/app-menu/app-menu.component.vue';
import ProductTile  from '../products/components/product-tile.component.vue';

export default {
  name: 'search',
  components: {
    Navigation,
    AppMenu,
    ProductTile,
  },
  data() {
    return {
      searchValue: '',
    };
  },
  computed: {
    resultsNumber() {
      return this.$store.state.searchStore.searchResults.length;
    },
  },
  methods: {
    search() {
      this.$store.dispatch('searchForProducts', this.searchValue.toLowerCase().trim());
    },
    clearSearch() {
      this.searchValue = '';
      this.$store.commit('setResults', []);
    },
    goToProduct(category, title) {
      this.$router.push({ path: `/products/${category}/${title}` });
    },
  },
  created() {
    this.clearSearch();
  },
};
</script>

<style scoped lang="scss">
.search {
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
    padding: 25rem 37rem 29rem 20rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    &::after {
      content: '';
      background: url("../../assets/img/photo-1449247709967-d4461a6a6103.png");
      background-size: cover;
      opacity: 0.3;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: fixed;
      z-index: -1;
      margin-left: $navbar-width;
    }
  }

  &__form {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: fit-content;
    margin-bottom: 20rem;

    &__input {
      height: 17rem;
      width: 150rem;
      border: none;
      font-size: 14rem;
      text-transform: uppercase;
      font-weight: 200;
      color: $black;
      letter-spacing: 3.5px;
      background-color: transparent;

      &:focus {
        outline: none;
      }
    }

    &__button {
      background-color: transparent;
      border: none;
      font-size: 10rem;
      padding-left: 1rem;
      color: $grey-300;
      font-weight: 300;
      cursor: pointer;

      &:focus {
        outline: none;
      }
    }

    &__info {
      position: absolute;
      width: 100%;
      bottom:-8rem;
      border-top: 1px solid $grey-300;
      margin-top: 11rem;
      font-size: 3.6rem;
      color: $grey-300;
      letter-spacing: 0.9px;
      font-weight: 300;
      padding-top: 3rem;
    }
  }

  &__item-list {
    display: grid;
    grid-auto-rows: 45rem;
    grid-template-columns: repeat(3, 45rem);
    grid-gap: 5rem;
  }

  &__results-counter {
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 0.75px;
    color: $black;
    margin-top: 4rem;

    &--hide {
      display: none;
    }
  }
}

</style>
