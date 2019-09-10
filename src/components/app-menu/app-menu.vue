<template>
  <div class="app-menu"
       :class="{'show': isMenuVisible}">

    <div @click="toggleMenu"
         class="app-menu__button">

      <div v-if="!isMenuVisible">
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 512 512"
             fill="#000"
             class="app-menu__icon">

          <path d="M491.318,235.318H20.682C9.26,235.318,0,244.577,0,256s9.26,20.682,20.682,20.682h470.636
                  c11.423,0,20.682-9.259,20.682-20.682C512,244.578,502.741,235.318,491.318,235.318z" />

          <path d="M491.318,78.439H20.682C9.26,78.439,0,87.699,0,99.121c0,11.422,9.26,20.682,20.682,20.682h470.636
                  c11.423,0,20.682-9.26,20.682-20.682C512,87.699,502.741,78.439,491.318,78.439z" />

          <path d="M491.318,392.197H20.682C9.26,392.197,0,401.456,0,412.879s9.26,20.682,20.682,20.682h470.636
                  c11.423,0,20.682-9.259,20.682-20.682S502.741,392.197,491.318,392.197z" />
        </svg>
      </div>
      <div v-else>
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 47.971 47.971"
             fill="#000"
             class="app-menu__icon">

          <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
                   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
                   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
                   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/>
        </svg>
      </div>
    </div>
    <div class="app-menu__content">

      <router-link to="/products"
                   v-for="category in categories"
                   :key="category.value"
                   class="app-menu__content__item">{{category.value}}

      </router-link>

      <router-link to="/products"
                   class="app-menu__content__item app-menu__content__item--all-products-link">

          <p>show all products</p>
          <div class="app-menu__content__item--underline"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
/* eslint max-len: 0 */
import { mapState } from 'vuex';

export default {
  name: 'app-menu',
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
  background-color: white;
  z-index: 5;
  transition: all ease-in-out 0.3s;

  &__button {
    position: fixed;
    right: 5.7rem;
    top: 8.7rem;
    background-color: white;
    width: 9rem;
    height: 9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5rem;
    cursor: pointer;
    box-shadow: 0 0 25px 0 rgba(219, 219, 219, 0.5);
    z-index: 7;

    &:hover {
      background-color: darken(white, 8);
    }
  }

  &__icon {
    fill: $primary;
    width: 4rem;
    height: 3rem;
  }

  &__content {
    height: 100vh;
    background-color: white;
    box-shadow: 0 0 25px 0 rgba(219, 219, 219, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 18rem;
    text-align: right;
    text-transform: uppercase;
    letter-spacing: 0.045rem;
    position: relative;

    &__item {
      margin: 5rem 0;
      color: #c1c1c1;
      text-decoration: none;
      &:hover {
        color: $primary;
        text-decoration: underline;
      }

      &--underline {
        margin-left: 1.8rem;
        margin-top: 1rem;
        width: 16rem;
        height: 0.1rem;
        border: $primary 1px solid;
      }
    }

    &__item--all-products-link {
      position: absolute;
      bottom: 2%;
      left: 23%;
      color: $primary;
      text-decoration: none !important;
    }
  }
}

.show {
  transform: translateX(-$side-menu-width);
}

</style>
