<template>
   <ul>
      <li>[Previous]</li>
      <li v-for="n in pages" :key="n" @click=goToPage(n)>[{{ n }}]</li>
      <li>[Next]</li>
   </ul>
</template>

<script>
export default{
   props: ['currentPage', 'pages'],
   methods: {
      goToPage(page){
         this.$emit("myEvent", page)
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
   font-size: 18px;
   list-style: none;
   padding: 0 5px;
}
</style>2