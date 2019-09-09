<template>
  <div class="checkout">
    <navigation />
  </div>
</template>

<script>
import Navigation from '../../components/navigation/navigation.vue';

export default {
  name: 'checkout',
  components: {
    Navigation,
  },
};
</script>

<style scoped lang="scss">
  .checkout {
    display: grid;
    grid-template-columns: $navbar-width 1fr;
  }

</style>
