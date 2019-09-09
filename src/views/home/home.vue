<template>
  <div class="home">
    <navigation />
    <div class="home__content">
      <div class="home__content__header">
        <div class="home__content__header__wrapper">
          <h1 class="home__content__header--brand">olios</h1>
          <h3 class="home__content__header--description">newest forniture shop template</h3>
          <span class="home__content__header--background">newest</span>
          <custom-button width="25.1rem" class="home__content__header--button">
            view more
          </custom-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation   from '../../components/navigation/navigation.vue';
import CustomButton from '../../components/custom-button/custom-button.vue';
// TODO: set eslint configuration to not requiring file extensions

export default {
  name: 'home',
  components: {
    Navigation,
    CustomButton,
  },
};
</script>

<style scoped lang="scss">

.home {
  display: grid;
  grid-template-columns: $navbar-width 1fr;
}

.home__content {
  background-image: url("../../assets/img/photo-1449247709967-d4461a6a6103.png");
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 100%;
  overflow: hidden;

  &__header {
    padding-right: $navbar-width;
    text-transform: uppercase;
    margin-top: 8rem;
    text-align: center;
    display: flex;
    justify-content: center;

    &__wrapper {
      position: relative;
    }

    &--background {
      font-weight: 900;
      opacity: 0.7;
      font-size: 40rem;
      letter-spacing: 1rem;
      color: #E7E7E7;
      text-transform: uppercase;
      position: absolute;
      top: -5rem;
      right: -50rem;
      border: 1px black solid;
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
      margin-top: 11rem;
    }
  }
}

</style>
