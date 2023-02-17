<template><button class="btn" :class="mode">{{ btnTxt }}</button></template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    }, btnTxt: {
      type: String
    }
  },
};
</script>


<style scoped lang="scss">
.btn {
  cursor: pointer;
  padding: 5px 15px;
  font-size: 1.1rem;

  &:hover {
    background: rgb(162, 162, 199);
  }

  &.basic {
    color: white;
    background-color: rgb(102, 68, 102);
    border: none;

    &:hover {
      background: rgb(162, 162, 199);
    }
  }

  &.outline {
    background-color: transparent;
    border: 1px solid white;
    color: white;

    &:hover {
      background: rgb(156, 202, 138);
    }
  }
}
</style>