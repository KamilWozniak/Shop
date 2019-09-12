<template>
  <div class="home">
    <navigation />
    <div class="home__content">
      <div class="home__content__header-wrapper">
        <div class="home__content__header">
          <div class="home__content__header--high-z-index">
            <h1 class="home__content__header--brand">olios</h1>
            <h3 class="home__content__header--description">
              newest forniture shop template
            </h3>
            <custom-button width="25.1rem"
                           class="home__content__header--button"
                           @click.native="onMoreButtonClick">

              view more
            </custom-button>
          </div>
          <span class="home__content__header--background">newest</span>
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
    background-image: url("../../assets/img/photo-1449247709967-d4461a6a6103.png");
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: 100%;
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

      &--background {
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

      &--brand {
        font-weight: 200;
        font-size: 22rem;
        letter-spacing: 0.55rem;
      }

      &--description {
        font-weight: 300;
        letter-spacing: 0.09rem;
        font-size: 3.6rem;
      }

      &--button {
        margin-top: 5rem;
      }
    }
  }
}
</style>
