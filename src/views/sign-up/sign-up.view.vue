<template>
  <div class="sign-up__wrapper">
    <div class="sign-up">
      <form @submit.prevent="signUser" @input="checkPasswordEquality">
        <label class="sign-up__label">Mail: </label>
        <input placeholder="Enter an email"
               v-model="email"
               type="email"
               class="sign-up__input"
               autocomplete="off">

        <br>
        <br>
        <label class="sign-up__label">Password: </label>
        <input placeholder="Enter a password"
               v-model="password"
               type="password"
               class="sign-up__input"
               autocomplete="off">
        <br>
        <br>
        <label class="sign-up__label">Confirm Password: </label>
        <input placeholder="Confirm the password"
               v-model="confirmPassword"
               type="password"
               class="sign-up__input"
               autocomplete="off">
        <br>
        <br>
        <button type="submit" class="sign-up__btn">Sign up</button>
        <h3>{{!correctPasswordLength && password.length > 0 ? 'Password is to short!' : ''}}</h3>
        <h3>{{correctPasswordLength && !equalPasswords
          && confirmPassword.length > 0 ? 'Passwords are not equal!' : ''}}</h3>
      </form>
    </div>
    <div>

      <br>
      <br>
      <router-link to="/" class="sign-up__link">Home</router-link>
      <br>
      <br>
      <br>
      <br>
    </div>
    <div>
      <p class="sign-up__error-message">{{errorMsg}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      equalPasswords: false,
    };
  },
  computed: {
    correctPasswordLength() {
      return this.password.length >= 6;
    },
    errorMsg() {
      return this.$store.state.loginStore.errorMsg;
    },
  },
  methods: {
    checkPasswordEquality() {
      this.equalPasswords = this.password === this.confirmPassword;
    },
    signUser() {
      if (this.equalPasswords && this.correctPasswordLength) {
        this.$store.dispatch('signUserUp', {
          email: this.email,
          password: this.password,
        });
      } else {
        this.$store.commit('setErrorMsg',
          'provided password is too short or confirmed password is not identical with original one');
      }
    },
  },
  created() {
    this.$store.commit('setErrorMsg', '');
  },
};
</script>

<style scoped lang="scss">

.sign-up {
  &__wrapper {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  &__input {
    height: 6rem;
    width: 80rem;
    font-size: 4rem;

  }

  &__label {
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
