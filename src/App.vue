<template>
<data-table :table-labels="tableLabels" :employees="filteredData"></data-table>
</template>

<script>
import DataTable from './components/DataTable.vue';
export default {
  components: { DataTable },
    data(){
      return {
        tableLabels: [
        { accessor: 'name', label: "Name" },
        { accessor: 'age', label: "Age" },
        { accessor: 'is_Manager', label: "Manager", },
        { accessor: 'start_date', label: "Start Date" }],
        dataRows: [
          { id: 1, name: 'Liz Lemon', age: 36, is_manager: true, start_date: '02-11-1999' },
          { id: 2, name: 'Jack Donaghy', age: 40, is_manager: true, start_date: '03-05-1997' },
          { id: 3, name: 'Tracy Morgan', age: 39, is_manager: false, start_date: '07-12-2002' },
          { id: 4, name: 'Jenna Maroney', age: 40, is_manager: false, start_date: '02-28-1999' },
          { id: 5, name: 'Kenneth Parcell', age: Infinity, is_manager: false, start_date: '01-01-1970' },
          { id: 6, name: 'Pete Hornberger', age: null, is_manager: true, start_date: '04-01-2000' },
          { id: 7, name: 'Frank Rossitano', age: 36, is_manager: false, start_date: null },
          { id: 8, name: null, age: null, is_manager: null, start_date: null },
          { id: 9, name: 'Beatrix Doe', age: 29, is_manager: true, start_date: '04-05-2020' },
          { id: 10, name: 'Sam Smith', age: 28, is_manager: false, start_date: '04-11-2022' },
          { id: 11, name: 'Jill Jones', age: 31, is_manager: null, start_date: '24-08-2017' },
          { id: 12, name: 'Pete Doe', age: 35, is_manager: false, start_date: '12-03-2019' },
          { id: 13, name: 'Kat More', age: 27, is_manager: false, start_date: '12-06-2022' },
          { id: 14, name: 'John Doe', age: 25, is_manager: true, start_date: '03-10-2018' },
        ],
        filteredData: []
      }
},
methods: {
  filterData(){
    return this.filteredData = this.dataRows.filter(row => {if(row.name) return row})
  },
},
beforeMount: function(){
   this.filterData()
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
