<template>
<data-table :columns="tableColumns" :rows="dataRows"></data-table>
</template>

<script>
import DataTable from './components/DataTable.vue';
export default {
  components: { DataTable },
    data(){
  return {
    tableColumns: [{accessor: 'name', label: "Name"}, 
    {accessor: 'age', label: "Age"}, 
    {accessor: 'is_Manager', label: "Manager",},
    // format: value => (value ? '✔️' : '✖️') 
    {accessor: 'start_date', label: "Start Date"}],
    dataRows: [
  { id: 1, name: 'Liz Lemon', age: 36, is_manager: true, start_date: '02-28-1999' },
  { id: 2, name: 'Jack Donaghy', age: 40, is_manager: true, start_date: '03-05-1997' },
  { id: 3, name: 'Tracy Morgan', age: 39, is_manager: false, start_date: '07-12-2002' },
  { id: 4, name: 'Jenna Maroney', age: 40, is_manager: false, start_date: '02-28-1999' },
  { id: 5, name: 'Kenneth Parcell', age: Infinity, is_manager: false, start_date: '01-01-1970' },
  { id: 6, name: 'Pete Hornberger', age: null, is_manager: true, start_date: '04-01-2000' },
  { id: 7, name: 'Frank Rossitano', age: 36, is_manager: false, start_date: null },
  { id: 8, name: 'Beatrix Doe', age: 29, is_manager: true, start_date: '04-05-2020'},
  // { id: 8, name: null, age: null, is_manager: null, start_date: null },
  { id: 9, name: 'Sam Smith', age: 28, is_manager: false, start_date: '04-11-2022' },
  { id: 10, name: 'Jill Jones', age: 31, is_manager: true, start_date: '24-08-2017' },
  { id: 11, name: 'Pete Doe', age: 35, is_manager: false, start_date: '12-03-2019' },
],
  }
},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
