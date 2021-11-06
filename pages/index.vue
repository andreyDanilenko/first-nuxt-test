<template>
  <div class="products">
    <div class="products__filters">
      <products-filter />
    </div>
    <div class="products__list-wrapper">
      <div class="products__list-view">
        <p class="products__list-view-result">
          {{ products.length }} results found in {{ requestTimeStamp }}ms
        </p>
        <products-select
          :options="options"
          :selected="selected"
          @select="optionSelect"
        />
      </div>
      <div class="products__search">
        <search-input @search="searchProducts" />
      </div>
      <ul v-if="!isProductsLoading" class="products__list">
        <product-item
          v-for="product in sortedAndSearchedProducts.slice(
            fromCount,
            beforeCount
          )"
          :key="product.id"
          :product="product"
          @addToWishlist="addToWishlist"
          @addToCart="addToCart"
        />
      </ul>
      <div class="products__loading" v-else>Идет загрузка...</div>

      <div class="products__pagination"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import ProductsSelect from "../components/ProductsSelect.vue";
import SearchInput from "../components/SearchInput.vue";
export default {
  components: { SearchInput, ProductsSelect },
  data() {
    return {
      fromCount: 0,
      beforeCount: 9,
      searchValue: "",
      options: [
        { name: "Default", value: "default" },
        { name: "Price", value: "price" },
        { name: "Rating", value: "rating" },
      ],
      selected: "Default",
    };
  },

  computed: {
    ...mapGetters({
      sortedProducts: "products/sortedProducts",
      sortedAndSearchedProducts: "products/sortedAndSearchedProducts",
    }),

    ...mapState({
      products: (state) => state.products.products,
      requestTimeStamp: (state) => state.products.requestTimeStamp,
      isProductsLoading: (state) => state.products.isProductsLoading,
    }),
  },

  methods: {
    ...mapMutations({
      setSearchQuery: "products/setSearchQuery",
      setSelectedSort: "products/setSelectedSort",
    }),

    ...mapActions({
      fetchProducts: "products/fetchProducts",
      addCart: "cart/addToCart",
      addWishlist: "wishlist/addToWishlist",
    }),

    optionSelect(option) {
      this.selected = option.name;
      this.setSelectedSort(option.value);
    },

    searchProducts(option) {
      this.setSearchQuery(option);
    },

    addToWishlist(data) {
      this.addWishlist(data);
      console.log(data);
    },

    addToCart(data) {
      this.addCart(data);
      console.log(data);
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

  &__loading {
    margin-top: 30px;
    text-align: center;
    font-weight: 300;
    font-size: 42px;
    line-height: 46px;
  }

  &__filters {
    width: 100%;

    @media (min-width: 1240px) {
      width: calc(100% / 4 - 15px);
    }
  }

  &__list-view {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    &-result {
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
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

  &__search {
    width: 100%;
    margin-top: 26px;
  }

  &__search-wrapper {
    margin-top: 22px;
    position: relative;

    input {
      font-family: "Montserrat";
      padding: 16px 62px 16px 32px;
      width: 100%;
      font-weight: 300;
      font-size: 22px;
      line-height: 26px;
      border: none;
      border-radius: 8px;
      box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.1352);
    }

    button {
      cursor: pointer;
      background: transparent;
      border: none;
      position: absolute;
      top: 50%;
      right: 2%;
      transform: translate(0, -50%);
    }
  }
}
</style>
