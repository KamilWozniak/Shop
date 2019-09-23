<template>
  <div class="sign-in">
    <div>
      <form @submit.prevent="signIn">
        <label class="sign-in__label">Mail: </label>
        <input id="email"
               name="Email"
               placeholder="Enter an email"
               v-model="email"
               type="email"
               class="sign-in__input"
               autocomplete="off"
        >
        <br>
        <br>
        <label class="sign-in__label">Password: </label>
        <input id="password"
               name="Password"
               placeholder="Enter a password"
               v-model="password"
               type="password"
               class="sign-in__input"
               autocomplete="off">
        <br>
        <br>
        <button class="sign-in__btn" type="submit">Sign in</button>
      </form>
    </div>
    <div>
      <br>
      <br>
      <br>
      <router-link to="/sign-up" class="sign-in__link">
        You don't have account yet? Create one!
      </router-link>
    </div>
    <div>
      <br>
      <br>
      <br>
      <router-link to="/" class="sign-in__link">Home</router-link>
    </div>
    <div>
      <p class="sign-in__error-message">{{errorMsg}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sign-in.view',
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

  &__label {
    font-size: 5rem;
  }

  &__input {
    height: 6rem;
    width: 80rem;
    font-size: 4rem;
  }

  &__btn {
    font-size: 5rem;
    width: 100%;
    cursor: pointer;
  }

  &__link {
    font-size: 5rem;
  }
  &__error-message {
    font-size: 5rem;
    color: red;
  }
}

</style>
