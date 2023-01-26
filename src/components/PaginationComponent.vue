<template>
   <ul>
      <li @click="goToPrevPage()">[Previous]</li>
      <li v-for="(page, index) in pages" :key="page" @click="goToPage(index)" :class="{active: activePage === index}">[{{ page }}]</li>
      <li @click="goToNextPage()">[Next]</li>
   </ul>
</template>

<script>

export default{
   props: ['currentPage', 'pages'],
   emits: ['my-event'],
   data(){
      return {
         activePage: this.currentPage, 
      }
   },
   methods: {
      goToPage(page){
         this.activePage = page;
         this.$emit("my-event", this.activePage);      
         console.log("page " + page)
         console.log("currentPage " + this.currentPage)
         console.log("activePage " + this.activePage)
    },
      goToNextPage(){
         const nextPage = this.currentPage + 1; //current Page i active Page? ujednolicenie?
         if(nextPage < this.pages){
            this.$emit("my-event", nextPage);
            this.activePage +=1;
         }

      },
      goToPrevPage(){
         const prevPage = this.currentPage - 1;
         if(prevPage >= 0)
         {
            this.$emit("my-event", prevPage);
            this.activePage -=1;
         }
      }
   }
}
</script>

<style scoped>
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
   color: purple
}

</style>

