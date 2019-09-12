<template>
  <button type="button"
          class="button"
          :style="`width: ${width}`">

    <slot>Click here</slot>
  </button>
</template>

<script>
export default {
  name: 'custom-button',
  props: {
    width: {
      type: String,
      require: true,
    },
  },
};

</script>

<style scoped lang="scss">

.button {
  background-color: $primary;
  text-transform: uppercase;
  height: 5.4rem;
  border-radius: 3rem;
  color: $white;
  letter-spacing: 0.045rem;
  font-weight: 900;
  font-size: 1.8rem;
  cursor: pointer;
  border: none;
}

</style>
