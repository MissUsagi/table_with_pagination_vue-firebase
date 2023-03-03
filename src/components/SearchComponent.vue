<template>
  <div class="input-row">
    <div class="row">
      <base-input mode="basic" placeholder-prop="Search by name" @update-input="searchEvent($event)"></base-input>
      <base-button mode="basic" @click="clearInput" btn-txt="Cancel"></base-button></div>
  </div>
</template>

<script>
export default {
  props: ['updateVisibleData', 'myPlaceholder'],
  emits:['clear-input', 'search-event'],
  methods: {
    clearInput() {
      this.searchedValue = "";
      this.$emit("clear-input");
    },
    searchEvent(e){
      let searchedValue = e;
      // if(searchedValue.length >=2)
      this.$emit("search-event", searchedValue)
    }
  },
};
</script>

<style scoped lang="scss">
.input-row {
  margin: 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  row-gap: 10px;
}
</style>