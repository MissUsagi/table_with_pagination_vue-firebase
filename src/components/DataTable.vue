<template>
   <div class="container">
   <table>
      <thead @click="filter">
         <tr>
            <th v-for="column in columns" :key="column.accessor">{{ column.label }}</th>
         </tr>
      </thead>
      <tbody>
         <tr v-for="row in rows" :key="row.id">
            <td>{{ row.name }}</td>
            <td>{{ row.age }}</td>
            <td>{{ row.is_manager }}</td>
            <td>{{ row.start_date }}</td>
         </tr>
      </tbody>
   </table>
   </div>
</template>

<script>
  export default {
   props: ['columns', 'rows'],
//    data(){
//    return{
//       filteredRows: this.rows,
//    }
//   },
  }

</script>

<style scoped>
.container {
	margin-right:auto;
	margin-left:auto;
	display:flex;
	justify-content:center;
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