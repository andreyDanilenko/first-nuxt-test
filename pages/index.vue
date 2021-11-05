<template>
  <div class="products">
    <div class="products__filters">
      <products-filter />
    </div>
    <div class="products__list-wrapper">
      <div class="products__list-view">
        <p class="products__list-view-result">7,618 results found in 5ms</p>
        <products-sort :options="options" :selected="selected" />
      </div>
      <div class="products__search">
        <div class="products__search-wrapper">
          <input
            v-on:keyup.enter="searchProducts"
            v-model="searchValue"
            placeholder="Search hear"
            class="products__search-input"
            type="text"
          />
          <button @click="searchProducts">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.2975 17C14.9283 17 18.6823 13.4183 18.6823 9C18.6823 4.58172 14.9283 1 10.2975 1C5.6668 1 1.91284 4.58172 1.91284 9C1.91284 13.4183 5.6668 17 10.2975 17Z"
                stroke="#606060"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.7784 19L15.538 14"
                stroke="#606060"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
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
export default {
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
      searchQuery: (state) => state.products.searchQuery,
      isProductsLoading: (state) => state.products.isProductsLoading,
    }),
  },

  methods: {
    ...mapMutations({
      setSearchQuery: "products/setSearchQuery",
    }),

    ...mapActions({
      fetchProducts: "products/fetchProducts",
      addCart: "cart/addToCart",
      addWishlist: "wishlist/addToWishlist",
    }),

    searchProducts() {
      this.setSearchQuery(this.searchValue);
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
