<template>
  <li class="product">
    <div class="product__poster-wrapper">
      <img class="product__poster" src="../assets/img/apple-watch.png" alt="" />
    </div>
    <div class="product__info">
      <div class="product__numbers">
        <div class="product__numbers-rating">
          <div>3.4</div>
          <div>
            <svg
              width="12"
              height="12"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.9787 1L8.92183 4.94953L13.2672 5.58675L10.1229 8.65931L10.865 13L6.9787 10.9495L3.09244 13L3.83447 8.65931L0.690247 5.58675L5.03557 4.94953L6.9787 1V1Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div class="product__numbers-price">$399</div>
      </div>
      <div class="product__text">
        <h3 class="product__title">JBL Speaker</h3>
        <p class="product__description">
          Redesigned from scratch and completely revised.
        </p>
      </div>
    </div>
    <div class="product__button-wrapper">
      <button class="product__button product__button--addtowishlist">
        <svg
          width="17"
          height="15"
          viewBox="0 0 17 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.7054 2.14929C13.9814 1.41343 12.9991 1 11.9748 1C10.9506 1 9.96828 1.41343 9.2442 2.14929L8.50012 2.90512L7.75604 2.14929C6.24796 0.61741 3.80287 0.617411 2.29479 2.14929C0.786706 3.68118 0.786706 6.16485 2.29479 7.69674L3.03887 8.45256L8.50012 14L13.9614 8.45256L14.7054 7.69674C15.4299 6.96122 15.8369 5.96344 15.8369 4.92302C15.8369 3.88259 15.4299 2.88481 14.7054 2.14929Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Wishlist</span>
      </button>
      <button class="product__button product__button--addtocart">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.737212"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.03651 1L1.24162 4.6V17.2C1.24162 18.1941 2.07583 19 3.10488 19H16.1477C17.1767 19 18.011 18.1941 18.011 17.2V4.6L15.2161 1H4.03651Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.737212"
            d="M1.24162 5.5H18.011"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.737212"
            d="M13.8186 9C13.8186 10.6569 12.1763 12 10.1503 12C8.12439 12 6.48204 10.6569 6.48204 9"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Add To Cart</span>
      </button>
    </div>
  </li>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.product {
  width: calc((100% / 3) - 16px);
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.1352);

  &__poster-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 30px 10px 0;
  }

  &__poster {
    display: block;
    max-width: 100%;
  }

  &__info {
    padding: 0 24px 22px;
  }

  &__numbers {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__numbers-rating {
    padding: 6px 9px;
    display: flex;
    justify-content: space-between;
    border-radius: 3px;
    color: #fff;
    background: #6f64f8;
    width: 62px;
    height: 30px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    svg {
      margin-top: 3px;
    }
  }

  &__numbers-price {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
  }

  &__title {
    margin-top: 16px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }

  &__description {
    margin-top: 3px;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
  }

  &__button-wrapper {
    display: flex;
  }

  &__button {
    cursor: pointer;
    width: 50%;
    padding: 14px 5px;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    outline: none;
    border: none;

    &--addtowishlist {
      color: #000;
      background: #ededed;
      border-radius: 0 0 0 8px;

      svg {
        margin-bottom: -2px;
        margin-right: 4px;
      }
    }

    &--addtocart {
      position: relative;
      color: #fff;
      background: #6f64f8;
      border-radius: 0 0 8px 0;

      svg {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
      }

      span {
        display: inline-block;
        margin-left: 27px;
      }
    }
  }
}
</style>