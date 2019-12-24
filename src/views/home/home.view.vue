<template>
  <div class="home">
    <div class="home__header">
      <h1 class="header__brand">olios</h1>
      <h3 class="header__description">
        newest furniture shop
      </h3>
      <s-button class="header__button"
                @click.native="onMoreButtonClick">

        view more
      </s-button>
    </div>
  </div>
</template>

<script>
import SButton from '@/components/s-button/s-button.component.vue';

export default {
  name: 'home',
  components: {
    SButton,
  },
  methods: {
    onMoreButtonClick() {
      this.$router.push({ path: 'products' });
    },
  },
};
</script>

<style scoped
       lang="scss">

.home {
  height: 100vh;

  &::after {
    content: '';
    background: url("../../assets/img/photo-1449247709967-d4461a6a6103.png");
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
    z-index: -1;
  }

  &__header {
    text-transform: uppercase;
    margin-top: 8rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .header {

    &__brand {
      font-weight: 200;
      font-size: 22rem;
      letter-spacing: 5.5px;
      user-select: none;
    }

    &__description {
      font-weight: 300;
      letter-spacing: 0.9px;
      font-size: 3.6rem;
      user-select: none;
    }

    &__button {
      margin-top: 5rem;
      width: 25rem;
      user-select: none;

      &:focus {
        outline: none;
      }
    }
  }
}

/*
@media screen and (max-width: $end-of-large-screen) and (min-width: $end-of-medium-screen + 1) {
  .home {
    grid-template-columns: $navbar-width-lg 1fr;

    &__content {
      background-position-x: 50%;
      height: 100vh;

      &__header-wrapper {
        margin-top: 10rem;
      }

      &__header {

        &__background {
          font-size: 14rem;
          right: 0;
          left: 0;
          margin-left: auto;
          margin-right: auto;
          top: 0;
        }

        &__brand {
          font-size: 9rem;
        }

        &__description {
          font-size: 4rem;
        }

        &__button {
          font-size: 2rem;
        }
      }
    }
  }
}

@media screen and (max-width: $end-of-medium-screen) and (min-width: $end-of-small-screen + 1) {
  .home {
    grid-template-columns: $navbar-width-md 1fr;

    &__content {
      background-position-x: 50%;
      height: 100vh;

      &__header-wrapper {
        margin-top: 10rem;
      }

      &__header {

        &__background {
          font-size: 10rem;
          right: 0;
          left: 0;
          margin-left: auto;
          margin-right: auto;
          top: 0;
        }

        &__brand {
          font-size: 9rem;
        }

        &__description {
          font-size: 4rem;
        }

        &__button {
          font-size: 2rem;
        }
      }
    }
  }
}

@media screen and (max-width: $end-of-small-screen) {
  .home {
    grid-template-columns: 1fr;
    grid-template-rows: $navbar-width-sm 1fr;

    &__content {
      height: calc(100vh - #{$navbar-width-sm});
      background-position-x: 50%;

      &__header-wrapper {
        margin-top: 10rem;
      }

      &__header {
        &__background {
          display: none;
        }

        &__brand {
          font-size: 4rem;
        }

        &__description {
          font-size: 2rem;
        }

        &__button {
          font-size: 1.5rem;
          padding: 1rem;
          margin-top: 2rem;
          height: 4rem;
        }
      }
    }
  }
} */
</style>
