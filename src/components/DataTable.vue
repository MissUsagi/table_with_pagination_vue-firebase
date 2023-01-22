<template>
   <div class="container">
   <table>
      <thead @click="filter">
         <tr>
            <th v-for="column in columns" :key="column.accessor">{{ column.label }}</th>
         </tr>
      </thead>
      <tbody>
         <tr v-for="row in visibleData" :key="row.id">
            <td>{{ row.name }}</td>
            <td>{{ row.age }}</td>
            <td >{{ row.is_manager }}</td>
            <td>{{ row.start_date }}</td>
         </tr>
      </tbody>
   </table>
   <pagination-component :current-Page="currentPage" :pages="pagesInTotal" @myEvent="changePage"></pagination-component>
   </div>
</template>

<script>
import PaginationComponent from './PaginationComponent.vue';
  export default {
   components: {PaginationComponent},
   props: ['columns', 'rows'],
   data(){
   return{
      pageSize: 3,
      currentPage: 0,
      visibleData: [],
      pagesInTotal: null,
   }
  },
  mounted: function(){
   this.updateVisibleData()
  },
  methods: {
   updateVisibleData(){
      this.pagesInTotal = Math.ceil(this.rows.length / this.pageSize);
      this.visibleData = this.rows.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize)
   },
   changePage(page){
      this.currentPage = page-1;
      this.updateVisibleData();
   }
  }
  }

</script>

<style scoped>
.container {
	margin-right:auto;
	margin-left:auto;
	display:flex;
   flex-direction: column;
	justify-content:center;
   border: 1px solid #333;
}
table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  padding: 8px;
  min-width: 50px;
}

table td {
min-width: 250px;
  text-align: left;
  padding: 8px;
  /* border-right: 2px solid #7D82A8; */
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;}
</style>