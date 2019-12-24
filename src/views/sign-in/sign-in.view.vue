<template>
  <div class="sign-in">
    <div class="sign-in__form-wrapper">
      <form @submit.prevent="signIn"
            class="sign-in__form">

        <label class="sign-in__label">Mail: </label>
        <input placeholder="Enter an email"
               v-model="email"
               type="email"
               class="sign-in__input"
               autocomplete="off">

        <label class="sign-in__label">Password: </label>
        <input placeholder="Enter a password"
               v-model="password"
               type="password"
               class="sign-in__input"
               autocomplete="off">

        <button class="sign-in__btn"
                type="submit">

          Sign in
        </button>
      </form>
    </div>
    <router-link to="/sign-up"
                 class="sign-in__link">

      You don't have an account yet? Create one!
    </router-link>
    <p class="sign-in__error-message">{{errorMsg}}</p>
  </div>
</template>

<script>

export default {
  name: 'sign-in.view',
  components: {},
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    signIn() {
      this.$store.dispatch('signUserIn', {
        email: this.email,
        password: this.password,
      });
    },
  },
  computed: {
    errorMsg() {
      return this.$store.state.loginStore.errorMsg;
    },
  },
  created() {
    this.$store.commit('setErrorMsg', '');
  },
};
</script>

<style scoped lang="scss">

.sign-in {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $grey-100;

  &__navigation {
    position: fixed;
    top: 0;
    left: 0;
  }

  &__form {
    display: flex;
    flex-direction: column;
  }

  &__label {
    font-size: 5rem;
  }

  &__input {
    height: 6rem;
    width: 80rem;
    font-size: 4rem;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px black solid;
    margin-bottom: 5rem;
    background-color: transparent;

    &:focus {
      outline: none;
    }

  }

  &__btn {
    font-size: 5rem;
    width: 100%;
    cursor: pointer;
    background-color: $primary;
    border-radius: 5rem;
    border: none;
    color: $white;
    padding: 1rem;
    margin-top: 3rem;
  }

  &__link {
    font-size: 5rem;
    color: $black;
    text-decoration: none;
    margin-top: 6rem;

    &:hover {
      color: $primary;
      text-decoration: underline;
    }
  }

  &__error-message {
    font-size: 5rem;
    color: red;
    margin-top: 1rem;
  }
}

</style>
