<template>
   <ul>
      <li>[Previous]</li>
      <li v-for="page in pages" :key="page" @click=goToPage(page)>[{{ page }}]</li>
      <li @click="goToNextPage()">[Next]</li>
   </ul>
</template>

<script>
export default{
   props: ['currentPage', 'pages'],
   methods: {
      goToPage(page){
         this.$emit("myEvent", page)
      },
      goToNextPage(){
         const nextPage = this.currentPage + 1;
         console.log(nextPage)
         this.$emit("myEvent", nextPage)
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


</style>2