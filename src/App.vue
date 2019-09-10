<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  methods: {
    ...mapActions(['fetchCategories']),
  },
  created() {
    this.fetchCategories();
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
