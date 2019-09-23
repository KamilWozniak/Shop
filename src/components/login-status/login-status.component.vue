<template>
  <p class="login-status">
    {{this.$store.state.loginStore.isLogged ? `logged as: ${userEmail}` : ''}}
  </p>
</template>

<script>
import * as firebase from 'firebase';

export default {
  name: 'login-status.component',
  computed: {
    userEmail() {
      if (firebase.auth().currentUser !== null) {
        return firebase.auth().currentUser.email;
      }
      return null;
    },
  },
};
</script>

<style scoped lang="scss">
.login-status {
  position: fixed;
  top: 1rem;
  right: 1rem;
}
</style>
