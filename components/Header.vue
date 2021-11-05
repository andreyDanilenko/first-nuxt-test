<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__personal">
        <personal-button />
      </div>
      <div class="header__base">
        <base-button />
        <div class="header__profile">
          <div class="header__profile-info">
            <div class="header__profile-info-name">{{ profile.name }}</div>
            <div class="header__profile-info-status">{{ profile.status }}</div>
          </div>
          <div class="header__profile-avatar">
            <img :src="require('../assets/img/' + profile.avatar)" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      profile: {
        name: "John Doe",
        status: "Available",
        avatar: "oval.png",
      },
    };
  },

  methods: {
    
  },
};
</script>
<style lang="scss">
.header {
  max-width: 1710px;
  margin: 0 auto;
  padding: 30px 30px 0;

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    padding: 14px 20px;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.1352);
  }

  &__base {
    order: -1;
    display: flex;
    align-items: center;

    @media (min-width: 768px) {
      order: 1;
    }
  }

  &__profile {
    display: flex;
    align-items: center;
    text-align: right;
  }

  &__profile-info {
    margin: 0 10px 0 15px;
  }

  &__profile-info-name {
    font-size: 14px;
    line-height: 17px;
    font-weight: 400;
    text-align: end;
  }

  &__profile-info-status {
    font-size: 11px;
    line-height: 13px;
    font-weight: 300;
    text-align: end;
  }

  &__profile-avatar {
    cursor: pointer;
    display: block;
    border-radius: 50%;
    width: 35px;

    img {
      display: block;
      width: 35px;
    }
  }
}
</style>