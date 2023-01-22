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
      <p @click="updateVisibleData()">{{ updateVisibleData }}</p>
   </table>
   <pagination-component></pagination-component>
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
      currentPage: 1,
      visibleData: []
   }
  },
  mounted: function(){
   this.updateVisibleData()
  },
  methods: {
   updateVisibleData(){
      console.log(this.visibleData = this.rows.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize))
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