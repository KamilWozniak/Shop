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

      <img src="../../assets/img/Home.svg"
           alt="home"
           class="navigation__link__icon" />

    </router-link>

    <router-link to="/checkout"
                 class="router-link navigation__link">

      <img src="../../assets/img/shopping-basket.svg"
           alt="home"
           class="navigation__link__icon" />

    </router-link>

    <router-link to="/search"
                 class="router-link navigation__link">

      <img src="../../assets/img/Search.svg"
           alt="home"
           class="navigation__link__icon" />

    </router-link>
  </div>
</template>

<script>

export default {
  name: 'navigation',
};
</script>


<style scoped lang="scss">
.navigation {
  display: flex;
  flex-direction: column;
  justify-items: start;
  width: $navbar-width;
  height: 100vh;
  background-color: white;

  &__logo {
    align-self: center;
    margin-top: 3rem;
    margin-bottom: 12rem;
    height: auto;

    &::after {
      content: '.';
      margin-left: -0.5rem;
      font-size: 3rem;
      color: #0018AC;
    }

    &__image {
      width: 42px;
      height: 42px;
    }
  }

  &__link {
    height: auto;
    align-self: center;
    margin: 5rem 0;

    &__icon {
      width: 2.6rem;
      height: 2.6rem;


    }

  }

}

</style>
