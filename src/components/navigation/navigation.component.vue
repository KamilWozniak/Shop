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
                 class="router-link navigation__link navigation__link--position-relative">

      <app-icon icon="basket"
                :prop-class="currentPath === '/checkout' ? 'navigation__link--active' : ''" />

      <div v-show="numberOfCartItems > 0"
           class="navigation__link__cart-badge__wrapper">

        <p class="navigation__link__cart-badge">{{numberOfCartItems}}</p>
      </div>
    </router-link>
    <router-link to="/search"
                 class="router-link navigation__link">

      <app-icon icon="search"
                :prop-class="currentPath === '/search' ? 'navigation__link--active' : ''" />

    </router-link>
  </div>
</template>

<script>
import AppIcon from '../app-icon/app-icon.component.vue';

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
  computed: {
    numberOfCartItems() {
      let numberOfItems = 0;
      this.$store.state.checkoutStore.cart.forEach((item) => {
        numberOfItems += parseFloat(item.amount);
      });
      return numberOfItems;
    },
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
      margin-left: -5px;
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

    &--position-relative {
      position: relative;
    }

    &--active {
      fill: $primary;
    }


    &__cart-badge {
      color: $white;
      font-weight: bold;

      &__wrapper {
        position: absolute;
        top: -2rem;
        right: -2.9rem;
        border: 1px $primary solid;
        border-radius: 2rem;
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $primary;
      }
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


@media screen and (max-width: $end-of-large-screen) {
  .navigation {
    width: $navbar-width-lg;
    overflow: hidden;

    &__logo {
      margin-bottom: auto;
    }

    &__link {
      margin-bottom: 4rem;

      &:last-child {
        margin-bottom: 40vh;
      }
    }
  }
}

@media screen and (max-width: $end-of-medium-screen) {
  .navigation {
    width: $navbar-width-md;
    overflow: hidden;

    &__logo {
      margin-bottom: auto;
    }

    &__link {
      margin-bottom: 4rem;

      &:last-child {
        margin-bottom: 50vh;
      }
    }
  }
}

@media screen and (max-width: $end-of-small-screen) {
  .navigation {
    height: $navbar-width-sm;
    flex-direction: row;
    width: 100vw;
    justify-content: space-around;

    &__logo {
      margin-bottom: 0;
      margin-top: 5px;
    }

    &__link {
      margin: 0;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
