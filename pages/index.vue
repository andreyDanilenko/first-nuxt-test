<template>
  <div class="products">
    <div class="products__filters">
      <products-filter />
    </div>
    <div class="products__list-wrapper">
      <div class="products__list-view">
        <p class="products__list-view-result">
          {{ products.length }} results found in {{ requestTimeStamp }}s
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
          v-for="product in sortedAndSearchedProducts.slice(start, end)"
          :key="product.id"
          :product="product"
          @addToWishlist="addToWishlist"
          @addToCart="addToCart"
        />
      </ul>
      <div class="products__loading" v-else>Идет загрузка...</div>

      <div v-if="pages > 1" class="products__pagination">
        <button
          @click="page > 1 ? openPageHundle(page - 1) : openPageHundle(page)"
          class="products__pagiantion-button products__pagiantion-button--prev"
        ></button>
        <div class="products__pagiantion-list">
          <button
            @click="openPageHundle(p)"
            v-for="p in pages"
            :key="p"
            :class="p === page ? 'products__pagiantion-item--active' : ''"
            class="products__pagiantion-item"
          >
            {{ p }}
          </button>
        </div>
        <button
          @click="
            page < pages ? openPageHundle(page + 1) : openPageHundle(page)
          "
          class="products__pagiantion-button products__pagiantion-button--next"
        ></button>
      </div>
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
      sel: 1,
      pages: 1,
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
      page: (state) => state.products.page,
      start: (state) => state.products.start,
      end: (state) => state.products.end,
    }),
  },

  methods: {
    ...mapMutations({
      setSearchQuery: "products/setSearchQuery",
      setSelectedSort: "products/setSelectedSort",
      setPage: "products/setPage",
    }),

    ...mapActions({
      fetchProducts: "products/fetchProducts",
      addCart: "cart/addToCart",
      addWishlist: "wishlist/addToWishlist",
    }),

    openPageHundle(page) {
      this.setPage(page);
    },

    optionSelect(option) {
      this.selected = option.name;
      this.setSelectedSort(option.value);
    },

    searchProducts(option) {
      this.setPage(1);
      this.setSearchQuery(option);
    },

    addToWishlist(data) {
      this.addWishlist(data);
    },

    addToCart(data) {
      this.addCart(data);
    },
  },

  mounted() {
    this.fetchProducts();
  },

  watch: {
    sortedAndSearchedProducts() {
      this.pages = Math.ceil(this.sortedAndSearchedProducts.length / 9);
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

  &__pagination {
    margin-top: 37px;
    display: flex;
    justify-content: center;
  }

  &__pagiantion-list {
    display: flex;
    background: #ededed;
    border-radius: 50px;
    margin: 0 18px;
  }

  &__pagiantion-item {
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    display: block;
    border: none;
    background: transparent;
    padding: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;

    &:nth-child(n + 2) {
      margin-left: -10px;
    }

    &--active {
      background: #6f64f8;
      color: #fff;
    }
  }

  &__pagiantion-button {
    position: relative;
    cursor: pointer;
    display: block;
    width: 40px;
    height: 40px;
    font-size: 18px;
    line-height: 21px;
    font-weight: 400;
    background: #ededed;
    border: none;
    border-radius: 50%;

    &::before,
    &::after {
      position: absolute;
      content: "";
      width: 10px;
      height: 2px;
      border-radius: 5px;
      background: black;
    }

    &--prev {
      &::before {
        transform: rotate(-45deg);
        top: 16px;
        right: 16px;
      }

      &::after {
        transform: rotate(45deg);
        bottom: 16px;
        right: 16px;
      }
    }

    &--next {
      &::before {
        transform: rotate(45deg);
        top: 16px;
        left: 16px;
      }
      &::after {
        transform: rotate(-45deg);
        bottom: 16px;
        left: 16px;
      }
    }
  }
}
</style>
