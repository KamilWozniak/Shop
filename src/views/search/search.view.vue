<template>
  <div class="search">
    <navigation />
    <div class="search__content">
      <form @submit.prevent="test" class="search__form">
        <input class="search__form__input" type="text" v-model="searchValue" @input="test">
        <button class="search__form__button">&#215;</button>
        <div class="search__form__info">
          Type product that you are looking for
        </div>
      </form>
      <div class="search__item-list">product list</div>
      <div class="search__results-counter">2 searched results</div>
    </div>
    <app-menu />
  </div>
</template>

<script>
import Navigation from '../../components/navigation/navigation.component.vue';
import AppMenu    from '../../components/app-menu/app-menu.component.vue';

export default {
  name: 'search',
  components: {
    Navigation,
    AppMenu,
  },
  data() {
    return {
      searchValue: 'test',
    };
  },
  methods: {
    test() {
      console.log(this.searchValue);
    },
  },
};
</script>

<style scoped lang="scss">
.search {
  display: grid;
  grid-template-columns: $navbar-width 1fr;

  &__content {
    padding: 25rem 37rem 29rem 20rem;
    background: no-repeat linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),
    url("../../assets/img/photo-1449247709967-d4461a6a6103.png");
    width: 100%;
    height: 100%;
    background-size: cover;
    display: flex;
    flex-direction: column;

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
    }
    &__button {
      background-color: transparent;
      border: none;
      font-size: 10rem;
      padding-left: 1rem;
      color: $grey-300;
      font-weight: 300;
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
}


</style>
