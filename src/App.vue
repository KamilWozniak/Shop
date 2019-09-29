<template>
  <div class="app">
    <router-view :key="this.$route.fullPath"/>
    <login-status />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import * as firebase from 'firebase';
import LoginStatus from './components/login-status/login-status.component.vue';

export default {
  name: 'App',
  components: {
    LoginStatus,
  },
  methods: {
    ...mapActions(['fetchCategories', 'fetchProducts']),
  },
  created() {
    this.fetchCategories();
    this.fetchProducts();
    this.$store.commit('setIsLogged', firebase.auth().currentUser !== null);
  },
};
</script>

<style lang="scss">

html {
  font-size: 10px;
}

* {
  padding: 0;
  margin: 0;
  font-size: 1.8rem;
  box-sizing: border-box;
  line-height: 1.2;
  font-family: Lato;
}

</style>
