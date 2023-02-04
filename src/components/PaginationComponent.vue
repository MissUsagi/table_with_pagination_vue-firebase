<template>
   <div class="list">
      <ul>
         <li @click="goToPrevPage()">[Previous]</li>
         <li v-for="(page, index) in pages" :key="page" @click="goToPage(index)"
            :class="{ active: activePage === index }">
            [{{ page }}]
         </li>
         <li @click="goToNextPage()">[Next]</li>
      </ul>
   </div>
   <div class="page-size">
      <p>Table size:</p>
      <select id="page_size" name="page_size" v-model="tableSize" @change="changeTableSize">
         <option value="2">2</option>
         <option selected="selected" value="3">3</option>
         <option value="6">6</option>
         <option value="9">9</option>
         <option value="12">12</option>
         <option value="15">15</option>
      </select>
      <!-- <base-button mode="basic" @click="changeTableSize">Update</base-button> -->
   </div>
</template>

<script>
export default {
   props: ["currentPage", "pages"],
   emits: ["my-event", "update-table-size"],
   data() {
      return {
         activePage: this.currentPage,
         tableSize: null,
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
      changeTableSize(e) {
         this.tableSize = +e.target.value;
         this.$emit("update-table-size", this.tableSize);
         this.activePage = 0;
      },
   },
};
</script>

<style scoped lang="scss">
div .list {
   display: flex;
}

ul {
   margin: auto;
   padding: 0.7rem 0;
   display: flex;
   flex-direction: row;
}

li {
   cursor: pointer;
   font-size: 20px;
   list-style: none;
   padding: 0 5px;
}

li:hover {
   color: purple;
   scale: 1.1;
}

.active {
   font-weight: bold;
   color: purple;
}

.page-size {
   display: flex;
   flex-direction: row;
   gap: 10px;
   align-items: center;
   justify-content: center;

   p {
      font-size: 1.2rem;
   }

   select {
      padding: 5px 10px;
   }
}
</style>

