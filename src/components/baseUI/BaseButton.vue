<template>
  <button class="btn" :class="mode">{{ btnTxt }}<slot></slot></button>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    btnTxt: {
      type: String,
    },
  },
};
</script>


<style scoped lang="scss">
.btn {
  --red: #d02620;
  --violet: #c18ffd;
  --dark-violet: rgb(109, 73, 104);
  cursor: pointer;
  padding: 8px 15px;
  font-size: 1rem;
  transition: all 0.5s ease;
  &:hover {
    background: var(--light-purple);
  }
  &.rounded {
    border-radius: 8px;
  }
  &.basic {
    color: var(--base-white);
    background-color: var(--dark-purple);
    border: none;
    &:hover {
      background: var(--complementary);
    }
  }
  &.outline {
    background-color: transparent;
    border: 1px solid var(--base-white);
    color: var(--base-white);

    &:hover {
      background: var(--dark-violet);
      scale: 1.05;
    }
  }
  &.no-outline {
    background: none;
    border: none;
    border-radius: 3px;
    color: var(--base-white);
    &:hover {
      background-color: var(--violet);
      color: var(--base-white);
    }
  }
  &.warning {
    background-color: var(--red);
    &:hover {
      background-color: var(--primary-color);
    }
  }
  &.success {
    background-color: var(--sea-green);
    &:hover {
      background-color: var(--primary-color);
    }
  }
  &.transparent {
    opacity: 0.8;
  }
}
</style>



