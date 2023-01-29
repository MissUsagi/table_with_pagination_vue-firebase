<template>
   <div class="list">
   <ul>
      <li @click="goToPrevPage()">[Previous]</li>
      <li v-for="(page, index) in pages" :key="page" @click="goToPage(index)" :class="{ active: activePage === index }">
         [{{ page }}]</li>
      <li @click="goToNextPage()">[Next]</li>
   </ul>
</div>
   <div class="page-size">
      <p>Table size</p>
      <select id="page_size" name="page_size" v-model="tableSize">
         <option value="3">3</option>
         <option value="6">6</option>
         <option value="9">9</option>
         <option value="12">12</option>
         <option value="15">15</option>
      </select>
      <button type="submit" @click="changeTableSize">Update</button>
   </div>
</template>

<script>

export default {
   props: ['currentPage', 'pages'],
   emits: ['my-event', 'table-size'],
   data() {
      return {
         activePage: this.currentPage,
         tableSize: 3,
      }
   },
   methods: {
      goToPage(page) {
         this.activePage = page;
         this.$emit("my-event", this.activePage);
         console.log("page " + page)
         console.log("currentPage " + this.currentPage)
         console.log("activePage " + this.activePage)
      },
      goToNextPage() {
         const nextPage = this.currentPage + 1; //current Page i active Page? ujednolicenie?
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
      changeTableSize() {
         console.log(this.tableSize);
         this.$emit("table-size", this.tableSize);
         this.activePage = 0;
      }
   }
}
</script>

<style scoped>
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

button {
   background: purple;
   color: white;
   padding: 5px 10px;
   font-size: 1.2rem;
   border: none;
   border-radius: 0;
}

.active {
   font-weight: bold;
   color: purple
}

.page-size {
   display: flex;
   flex-direction: row;
   gap: 10px;
   align-items: center;
   justify-content: center;
   
}

.page-size p {
   font-size: 1.2rem;
}

.page-size select {
   padding: 5px 10px;
}
</style>

