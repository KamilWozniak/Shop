<template>
  <div class="app-menu">
    <div class="app-menu__button">
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
    <div class="app-menu__content">

      <router-link to="/products"
                   v-for="category in categories"
                   :key="category"
                   class="app-menu__content__item">{{category}}

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

export default {
  name: 'app-menu',
  data() {
    return {
      categories: ['asdasdsad', 'adadsa', 'adadasdsadasd', 'adadadsada'],
    };
  },
};

</script>

<style scoped lang="scss">

.app-menu {
  position: fixed;
  right: 0;
  top: 0;
  width: 37.4rem;
  background-color: white;
  z-index: 5;

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
    }
  }
}

</style>
