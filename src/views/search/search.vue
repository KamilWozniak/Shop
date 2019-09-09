<template>
  <div class="search">
    <navigation />
  </div>
</template>

<script>
import Navigation from '../../components/navigation/navigation.vue';

export default {
  name: 'search',
  components: {
    Navigation,
  },
};
</script>

<style scoped lang="scss">
  .search {
    display: grid;
    grid-template-columns: $navbar-width 1fr;
  }

</style>
