<template>
  <div class="app-menu"
       :class="{'app-menu--show': isMenuVisible}">

    <div @click="toggleMenu"
         class="app-menu__button">

      <div v-if="!isMenuVisible">
        <app-icon icon="menu-burger"
                  prop-class="app-menu__icon" />

      </div>
      <div v-else>
        <app-icon icon="menu-close"
                  prop-class="app-menu__icon" />

      </div>
    </div>
    <div class="app-menu__content">

      <router-link :to="`/products/${category.value}`"
                   v-for="category in categories"
                   :key="category.value"
                   class="app-menu__content__item">

        {{category.value}}
      </router-link>

      <router-link to="/products"
                   class="app-menu__content__item app-menu__content__item--bottom-centered">

        <p>show all products</p>
        <div class="app-menu__content__item--underline"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AppIcon      from '../app-icon/app-icon.component.vue';

export default {
  name: 'app-menu',
  components: {
    AppIcon,
  },
  data() {
    return {
      isMenuVisible: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    },
  },
  computed: {
    ...mapState(['categories']),
  },
};

</script>

<style scoped lang="scss">

.app-menu {
  position: fixed;
  right: -$side-menu-width;
  top: 0;
  width: $side-menu-width;
  background-color: $white;
  z-index: 5;
  transition: all ease-in-out 0.3s;

  &__button {
    position: fixed;
    right: 5.7rem;
    top: 8.7rem;
    background-color: $white;
    width: 9rem;
    height: 9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5rem;
    cursor: pointer;
    box-shadow: 0 0 2.5rem 0 rgba(219, 219, 219, 0.5);
    z-index: 7;

    &:hover {
      background-color: darken($white, 8);
    }
  }

  &__icon {
    fill: $primary;
    width: 4rem;
    height: 3rem;
  }

  &__content {
    height: 100vh;
    background-color: $white;
    box-shadow: 0 0 2.5rem 0 rgba(219, 219, 219, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 18rem;
    text-align: right;
    text-transform: uppercase;
    letter-spacing: 4.5px;
    position: relative;

    &__item {
      margin: 5rem 0;
      color: $grey-300;
      text-decoration: none;

      &:hover {
        color: $primary;
        text-decoration: underline;
      }

      &--underline {
        margin-left: 5rem;
        margin-top: 1rem;
        width: 16rem;
        height: 1px;
        border: $primary 1px solid;
      }
    }

    &__item--bottom-centered {
      position: absolute;
      bottom: 2%;
      left: 15%;
      color: $primary;
      text-decoration: none !important;
    }
  }

  &--show {
    transform: translateX(-$side-menu-width);
  }
}

</style>
