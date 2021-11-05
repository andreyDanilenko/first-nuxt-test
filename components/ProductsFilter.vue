<template>
  <div class="filters">
    <h2 class="filters__title">Фильтры</h2>
    <form class="filter-form">
      <h3 class="filters-title">Multi Range</h3>
      <ul class="filters__price-list">
        <li
          v-for="item in FILTERS_PRICE"
          :key="item.value"
          class="filters__price-item"
        >
          <input
            class="filters__price-input"
            type="radio"
            :id="item.value"
            name="price"
            v-bind:value="item.value"
          />
          <label class="filters-label filters__price-label" :for="item.value">{{
            item.title
          }}</label>
        </li>
        <li class="filters__price-item">
          <input
            class="filters__price-input"
            type="radio"
            id="all"
            name="price"
            value="all"
            checked
          />
          <label class="filters-label filters__price-label" for="all"
            >All</label
          >
        </li>
      </ul>

      <h3 class="filters-title">Slider</h3>
      <div class="filters__price-slider"></div>

      <h3 class="filters-title">Category</h3>
      <ul @click="filterCategories" class="filters__category-list">
        <li
          v-for="item in FILTERS_CATEGORY"
          :key="item.id"
          class="filters__category-item"
        >
          <input
            class="filters__category-input"
            type="checkbox"
            :id="item.name"
            name="category"
            :value="item.id"
          />
          <label
            class="filters-label filters__category-label"
            :for="item.name"
            >{{ item.name }}</label
          >
        </li>
      </ul>

      <h3 class="filters-title">Brand</h3>
      <ul @click="filterBrands" class="filters__brands-list">
        <li
          v-for="item in FILTERS_BRANDS"
          :key="item.id"
          class="filters__category-item"
        >
          <input
            class="filters__category-input"
            type="checkbox"
            :id="item.id"
            name="brands"
            :value="item.id"
          />
          <label class="filters-label filters__category-label" :for="item.id">{{
            item.title
          }}</label>
        </li>
      </ul>

      <h3 class="filters-title">Rating</h3>
    </form>
    <div class="filters__button-wrapper">
      <button class="filters__button">CLEAR ALL FILTERS</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      FILTERS_PRICE: [
        { title: " $10", value: "ten" },
        { title: "$10-$100", value: "ten-hndr" },
        { title: "$100-$500", value: "hndr-fivehndr" },
        { title: "$500", value: "fivehndr" },
      ],
      FILTERS_BRANDS: [
        { title: "Insigni", id: "1" },
        { title: "Samsung", id: "2" },
        { title: "Apple", id: "3" },
        { title: "HP", id: "4" },
        { title: "Sony", id: "5" },
        { title: "Metra", id: "6" },
        { title: "Dyne", id: "7" },
        { title: "LG", id: "8" },
        { title: "Canon", id: "9" },
        { title: "Speck", id: "10" },
      ],
      FILTERS_CATEGORY: [
        { name: "Cell Phones", id: "1" },
        { name: "Computers & tablets", id: "2" },
        { name: "Cell Phone Accessories", id: "3" },
        { name: "Appliances", id: "4" },
        { name: "Audio", id: "5" },
        { name: "iPhone Accessories", id: "6" },
        { name: "Cameras & Camcorders", id: "7" },
        { name: "iPhone Cases & Clips", id: "8" },
        { name: "TV & Home Theater", id: "9" },
        { name: "Small Kitchen Appliances", id: "10" },
      ],
      filterSelectedBrand: [],
      brands: [],
      categories: [],
      rating: [],
      price: [],
    };
  },

  methods: {
    searchParamsHundler() {
      return (params = {
        brands: this.brands,
        categories: this.categories,
        rating: this.rating,
        price: this.price,
      });
    },

    filterBrands(evt) {
      if (evt.target.tagName === "INPUT") {
        if (evt.target.checked) {
          this.brands.push(evt.target.value);
        }

        if (!evt.target.checked) {
          const index = this.brands.indexOf(evt.target.value);
          if (index > -1) {
            this.brands.splice(index, 1);
          }
        }
      }
    },

    filterCategories(evt) {
      if (evt.target.tagName === "INPUT") {
        if (evt.target.checked) {
          this.categories.push(evt.target.value);
        }

        if (!evt.target.checked) {
          const index = this.categories.indexOf(evt.target.value);
          if (index > -1) {
            this.categories.splice(index, 1);
          }
        }
      }
    },
  },
};
</script>
<style lang="scss">
.filter-form {
  margin-top: 20px;
  padding: 28px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.1352);
}

.filters-title {
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
}

.filters-title:nth-child(n + 2) {
  margin-top: 35px;
}

.filters-label {
  user-select: none;
  cursor: pointer;
  margin-left: 26px;
  font-size: 16px;
  line-height: 32px;
  font-weight: 300;
}

.filters {
  &__title {
    margin-top: 20px;
    font-size: 18px;
    line-height: 21px;
    font-weight: 400;
  }

  &__price-list,
  &__category-list,
  &__brands-list,
  &__price-slider {
    margin-top: 15px;
    padding-bottom: 25px;
    border-bottom: 1px solid #d6d6d6;
  }

  &__price-item,
  &__brands-item,
  &__category-item {
    position: relative;
  }

  &__price-input,
  &__category-input,
  &__brands-input {
    display: none;
  }

  &__price-input + &__price-label {
    &::before {
      transition: 0.5s;
      position: absolute;
      content: "";
      width: 15px;
      height: 15px;
      border: 1px solid #979797;
      border-radius: 50%;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
    }
  }

  &__category-input + &__category-label,
  &__brands-input + &__brands-label {
    &::before {
      transition: 0.5s;
      position: absolute;
      content: "";
      width: 17px;
      height: 17px;
      border: 1px solid #979797;
      border-radius: 3px;
      top: 7px;
      left: 0;
    }
  }

  &__price-input:checked + &__price-label {
    &::before {
      transition: 0.5s;
      background: #6f64f8;
      border-color: #6f64f8;
    }
  }

  &__category-input:checked + &__category-label,
  &__brands-input:checked + &__brands-label {
    &::before {
      transition: 0.5s;
      background: #6f64f8;
      border: none;
      width: 15px;
      height: 2px;
      top: 15px;
      left: 3px;
      transform: rotate(-60deg);
      border-radius: 2px;
    }
    &::after {
      transition: 0.5s;
      content: "";
      background: #6f64f8;
      position: absolute;
      width: 6px;
      height: 2px;
      top: 19px;
      left: 3px;
      transform: rotate(60deg);
      border-radius: 2px;
    }
  }

  &__button {
    margin-top: 30px;
    width: 100%;
    outline: none;
    border: none;
    color: #fff;
    background: #6f64f8;
    text-transform: uppercase;
    border-radius: 8px;
    font-size: 18px;
    line-height: 21px;
    font-weight: 400;
    padding: 18px;
    box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.1352);
  }
}
</style>