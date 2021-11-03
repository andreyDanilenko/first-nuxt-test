<template>
  <div class="products">
    <div class="products__filters">
      <products-filter />
      <button>Поиск</button>
    </div>
    <div class="products__list-wrapper">
      <ul class="products__list">
        <product-item @addToWishlist="addToWishlist" @addToCart="addToCart" />
        <product-item />
        <product-item />
        <product-item />
        <product-item />
        <product-item />
        <product-item />
        <product-item />
        <product-item />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToWishlist(evt) {
      console.log(evt);
    },

    addToCart(evt) {
      console.log(evt);
    },
  },
};
</script>
<style lang="scss">
.products {
  @media (min-width: 1240px) {
    display: flex;
    justify-content: space-between;
  }

  &__filters {
    width: 100%;

    @media (min-width: 1240px) {
      width: calc(100% / 4 - 15px);
    }
  }

  &__list-wrapper {
    width: 100%;

    @media (min-width: 1240px) {
      width: calc(100% / 4 * 3 - 15px);
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
