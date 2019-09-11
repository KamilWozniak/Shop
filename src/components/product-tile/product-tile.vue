<template>
  <div class="product-tile">
    <div class="product-tile__image-wrapper">
      <img class="product-tile__image"
           :src="product.picture
            ? `${product.picture}.png`
             : 'https://wanowi.com/public/uploads/products/list/product-default.jpg'"
           alt="product" >
    </div>
    <div class="product-tile__description-wraper">
      <p class="product-tile__description__title">{{product.title}}</p>
      <p class="product-tile__description__content">{{product.description}}</p>
      <p class="product-tile__description__price">$229</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-tile',
  props: {
    product: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">

.product-tile {
  background-color: white;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 6fr 4fr;
  cursor: pointer;
  padding: 1rem;

  &:hover {
    box-shadow: 2.5rem 2.5rem 2.5rem 0 rgba(219, 219, 219, 0.5);
  }

  &__image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image {
    max-height: 100%;
    max-width: 100%;
    width: auto;
    height: auto;
  }

  &__description-wraper {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    padding: 1rem 5rem;
  }

  &__description {
    &__title {
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 300;
      color: black;
      letter-spacing: 0.075rem;
    }

    &__content {
      margin-top: 1rem;
      color: #a8a8a8;
      letter-spacing: 0.045rem;
      font-weight: 300;
    }

    &__price {
      margin-top: 2rem;
      color: $primary;
      font-weight: bold;
      letter-spacing: 0.045rem;
    }
  }

}


</style>
