<template>
  <div class="products">
    <navigation />
  </div>
</template>

<script>
import Navigation from '../../components/navigation/navigation.vue';

export default {
  name: 'products',
  components: {
    Navigation,
  },
};
</script>

<style scoped lang="scss">
  .products {
    display: grid;
    grid-template-columns: $navbar-width 1fr;
  }
</style>
