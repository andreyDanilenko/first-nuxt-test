<template>
  <div class="select">
    <p class="title" @click="areOptionsVisable = !areOptionsVisable">
      {{ selected }}
    </p>
    <div class="options" v-if="areOptionsVisable">
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      areOptionsVisable: false,
    };
  },

  methods: {
    selectOption(option) {
      this.areOptionsVisable = false;
      this.$emit("select", option);
    },
  },
};
</script>
<style lang="scss">
.select {
  position: relative;
}

.title {
  cursor: pointer;
  display: inline-block;
  min-width: 120px;
  background: #fff;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  padding: 12px 45px 12px 15px;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.1352);
}

.options {
  width: 100%;
  background: white;
  position: absolute;
  top: calc(100% + 3px);
  z-index: 1000;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.1352);

  p {
    cursor: pointer;
    padding: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }

  p:first-child {
    border-radius: 8px 8px 0 0;
  }

  p:last-child {
    border-radius: 0 0 8px 8px;
  }

  p:hover {
    background: #f9f9f9;
  }
}
</style>