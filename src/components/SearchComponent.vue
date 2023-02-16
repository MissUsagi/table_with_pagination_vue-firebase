<template>
  <div class="row">
    <input
      type="text"
      :placeholder="myPlaceholder"
      v-model="searchedValue"
      @input="searchEvent($event)"
    />
    <base-button mode="basic" @click="clearInput">Clear</base-button>
  </div>
</template>

<script>
export default {
  props: ['updateVisibleData', 'myPlaceholder'],
  emits:['clear-input', 'search-event'],
  data() {
    return {
      searchedValue: "",
    };
  },
  methods: {
    clearInput() {
      this.searchedValue = "";
      this.$emit("clear-input");
    },
    searchEvent(e){
      this.searchedValue = e.target.value;
      this.$emit("search-event", this.searchedValue)
    }
  },
};
</script>

<style scoped lang="scss">
.row {
  margin: 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  row-gap: 10px;
}
</style>