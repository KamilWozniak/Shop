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

      <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 26 31.982"
           fill="#d8d8d8"
           class="navigation__link__icon"
           :class="currentPath === '/' ? 'active' : ''">

        <path d="M72 228.743l10 10V254h-5v-7a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v7h-5v-15.257l10-10m.884-3.359a1.25 1.25 0 0 0-1.768 0l-11.53 11.53a2 2 0 0 0-.586 1.415V255a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-7h4v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-16.671a2 2 0 0 0-.586-1.415z" transform="translate(-59 -225.017)"/>
      </svg>

    </router-link>

    <router-link to="/checkout"
                 class="router-link navigation__link">

      <svg viewBox="0 0 475.293 475.293"
           fill="#d8d8d8"
           class="navigation__link__icon"
           :class="currentPath === '/checkout' ? 'active' : ''">

        <path d="m475.293 178.235h-80.708l-84.791-141.32c-4.206-7.02-13.33-9.312-20.379-5.091-7.035 4.221-9.312 13.344-5.091 20.379l75.619 126.032h-244.592l75.619-126.033c4.221-7.035 1.944-16.158-5.091-20.379-7.064-4.221-16.158-1.929-20.379 5.091l-84.791 141.32h-80.709v29.706h32.237l37.734 201.283c3.945 21.076 22.366 36.364 43.805 36.364h247.742c21.438 0 39.859-15.288 43.79-36.349l37.747-201.298h32.239c-.001 0-.001-29.705-.001-29.705zm-99.184 225.535c-1.305 7.02-7.441 12.112-14.592 12.112h-247.741c-7.151 0-13.286-5.091-14.606-12.126l-36.719-195.816h350.392s-36.734 195.83-36.734 195.83z"/>
      </svg>

    </router-link>

    <router-link to="/search"
                 class="router-link navigation__link">

      <svg viewBox="0 0 32 32"
           fill="#d8d8d8"
           class="navigation__link__icon"
           :class="currentPath === '/search' ? 'active' : ''">

        <path d="M76 457a11.985 11.985 0 0 0-9.471 19.349l-10.09 10.09a1.5 1.5 0 1 0 2.121 2.121l10.09-10.09A12 12 0 1 0 76 457zm0 21a9 9 0 1 1 9-9 9.01 9.01 0 0 1-9 9z" transform="translate(-56 -457)"/>
      </svg>

    </router-link>
  </div>
</template>

<script>
/* eslint max-len: 0 */

export default {
  name: 'navigation',
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
      &:hover {
        fill: $primary;
      }
    }
  }
}

.active {
  fill: $primary;
}
</style>
