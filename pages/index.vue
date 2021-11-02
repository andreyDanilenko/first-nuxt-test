<template>
  <div class="products">
    <div class="products__filters">
      <products-filter />
      <button>Поиск</button>
    </div>
    <div class="products__list-wrapper">
      <ul class="products__list">
        <product-item />
        <product-item />
        <product-item />
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
.products {
  display: flex;
  justify-content: space-between;

  &__filters {
    width: calc(100% / 4 - 15px);
  }

  &__list-wrapper {
    width: calc(100% / 4 * 3 - 15px);
  }

  &__list {
    margin-top: 26px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
