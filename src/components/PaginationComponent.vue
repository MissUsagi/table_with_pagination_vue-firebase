<template>
  <div class="pagination">
    <div class="list-of-pages">
      <ul>
        <li @click="goToPrevPage()">&#5130;</li>
        <li
          v-for="(page, index) in pages"
          :key="page"
          @click="goToPage(index)"
          :class="{ active: activePage === index }"
        >
          {{ page }}
        </li>
        <li @click="goToNextPage()">&#5125;</li>
      </ul>
    </div>
    <div class="select-input">
      <base-select-input labelProp="Records per page:" :selected="tableSize" name="page_size" :options="[3,6,9,12,15]" @select-option="changeTableSize($event)"></base-select-input>
    </div>
  </div>
</template>

<script>
export default {
  props: ["currentPage", "pages"],
  emits: ["my-event", "update-table-size"],
  data() {
    return {
      activePage: this.currentPage,
      tableSize: 9,
    };
  },
  methods: {
    goToPage(page) {
      this.activePage = page;
      this.$emit("my-event", this.activePage);
    },
    goToNextPage() {
      const nextPage = this.currentPage + 1;
      if (nextPage < this.pages) {
        this.$emit("my-event", nextPage);
        this.activePage += 1;
      }
    },
    goToPrevPage() {
      const prevPage = this.currentPage - 1;
      if (prevPage >= 0) {
        this.$emit("my-event", prevPage);
        this.activePage -= 1;
      }
    },
    changeTableSize(event) {
      this.tableSize = +event;
      this.$emit("update-table-size", this.tableSize);
      this.activePage = 0;
    },
  },
};
</script>

<style scoped lang="scss">
$width: 40px;
$height: 40px;
@mixin flexRow {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
div .pagination {
  margin-top: 5px;
  background-color: var(--complementary-light);
}

.list-of-pages {
   padding: 10px;
  ul {
    @include flexRow;
  }
  li {
   @include flexRow;
    cursor: pointer;
    height: $height;
    width: $width;
    font-size: 1.2rem;
    list-style: none;
    margin: 0 4px;
    background: var(--base-white);
    border: 1px solid var(--complementary);
    border-radius: 5px;

    &:hover {
      color: var(--purple);
      scale: 1.1;
    }
  }
}

.active {
  font-weight: bold;
  color: var(--purple);
}

.select-input {
  @include flexRow;
  padding: 10px;
  gap: 10px;

  p {
    font-size: 1rem;
  }

  select {
    padding: 2px 3px;
  }
}
</style>

