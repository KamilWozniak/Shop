<template>
  <div class="navigation">
    <router-link to="/"
                 class="navigation__logo router-link">

      <img class="navigation__logo__image"
           src='../../assets/img/Kształt 1.png'
           alt="logo" />

    </router-link>
    <router-link to="/"
                 class="router-link navigation__link">

      <app-icon icon="home"
                :prop-class="currentPath === '/' ? 'navigation__link--active' : ''" />

    </router-link>
    <router-link to="/checkout"
                 class="router-link navigation__link">

      <app-icon icon="basket"
                :prop-class="currentPath === '/checkout' ? 'navigation__link--active' : ''" />

    </router-link>
    <router-link to="/search"
                 class="router-link navigation__link">

      <app-icon icon="search"
                :prop-class="currentPath === '/search' ? 'navigation__link--active' : ''" />

    </router-link>
  </div>
</template>

<script>
import AppIcon from '../app-icon/app-icon.vue';

export default {
  name: 'navigation',
  components: {
    AppIcon,
  },
  data() {
    return {
      currentPath: this.$router.currentRoute.fullPath,
    };
  },
};
</script>


<style scoped lang="scss">
.navigation {
  display: flex;
  flex-direction: column;
  justify-items: start;
  width: $navbar-width;
  height: 100vh;
  background-color: $white;

  &__logo {
    align-self: center;
    margin-top: 3rem;
    margin-bottom: 12rem;
    height: auto;

    &::after {
      content: '.';
      margin-left: -0.5rem;
      font-size: 3rem;
      color: $blue-200;
    }

    &__image {
      width: 4.2rem;
      height: 4.2rem;
    }
  }

  &__link {
    height: auto;
    align-self: center;
    margin: 5rem 0;

    &--active {
      fill: $primary;

    }

    &__icon {
      width: 2.6rem;
      height: 2.6rem;

      &:hover {
        fill: $primary;
      }
    }
  }
}

</style>
