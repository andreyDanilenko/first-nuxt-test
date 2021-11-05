<template>
  <div class="products">
    <div class="products__filters">
      <products-filter />
    </div>
    <div class="products__list-wrapper">
      <ul class="products__list">
        <product-item
          v-for="product in sortedAndSearchedProducts"
          :key="product.id"
          :product="product"
          @addToWishlist="addToWishlist"
          @addToCart="addToCart"
        />
      </ul>
      <div class="products__pagination"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      fromCount: 0,
      beforeCount: 9,
    };
  },

  computed: {
    ...mapGetters({
      sortedProducts: "products/sortedProducts",
      sortedAndSearchedProducts: "products/sortedAndSearchedProducts",
    }),
  },

  methods: {
    ...mapActions({
      fetchProducts: "products/fetchProducts",
    }),

    addToWishlist(evt) {
      console.log(evt);
    },

    addToCart(evt) {
      console.log(evt);
    },
  },

  mounted() {
    this.fetchProducts();
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
    justify-content: flex-start;
    margin: 0 -15px;
  }
}
</style>
