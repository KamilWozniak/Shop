<template>
  <div class="home">
    <navigation />
    <div class="home__content">
      <div class="home__content__header-wrapper">
        <div class="home__content__header">
          <div class="home__content__header--high-z-index">
            <h1 class="home__content__header__brand">olios</h1>
            <h3 class="home__content__header__description">
              newest forniture shop template
            </h3>
            <custom-button class="home__content__header__button"
                           @click.native="onMoreButtonClick">

              view more
            </custom-button>
          </div>
          <span class="home__content__header__background">newest</span>
        </div>
      </div>
    </div>
    <app-menu />
  </div>
</template>

<script>
import Navigation   from '../../components/navigation/navigation.component.vue';
import CustomButton from '../../components/custom-button/custom-button.component.vue';
import AppMenu      from '../../components/app-menu/app-menu.component.vue';

export default {
  name: 'home',
  components: {
    Navigation,
    CustomButton,
    AppMenu,
  },
  methods: {
    onMoreButtonClick() {
      this.$router.push({ path: 'products' });
    },
  },
};
</script>

<style scoped lang="scss">

.home {
  display: grid;
  grid-template-columns: $navbar-width 1fr;

  &__content {
    background: no-repeat url("../../assets/img/photo-1449247709967-d4461a6a6103.png");
    width: 100%;
    height: 100%;
    background-size: cover;
    overflow: hidden;

    &__header-wrapper {
      position: relative;
      text-transform: uppercase;
      margin-top: 8rem;
      text-align: center;
      display: flex;
      justify-content: center;
    }

    &__header {
      position: relative;

      &--high-z-index {
        position: relative;
        z-index: 2;
      }

      &__background {
        font-weight: 900;
        opacity: 0.7;
        font-size: 40rem;
        letter-spacing: 1rem;
        color: $grey-200;
        text-transform: uppercase;
        position: absolute;
        top: -5rem;
        right: -50rem;
        z-index: 0;
      }

      &__brand {
        font-weight: 200;
        font-size: 22rem;
        letter-spacing: 5.5px;
      }

      &__description {
        font-weight: 300;
        letter-spacing: 0.9px;
        font-size: 3.6rem;
      }

      &__button {
        margin-top: 5rem;
        width: 25rem
      }
    }
  }
}

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
}
</style>
