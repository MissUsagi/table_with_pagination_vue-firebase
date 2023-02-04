<template>
  <table-with-pagination
    :table-labels="tableLabels"
    :employees="filteredData"
  ></table-with-pagination>
</template>

<script>
import TableWithPagination from "./components/TableWithPagination.vue";
import employessData from "../public/dummyData.js";
export default {
  components: { TableWithPagination },
  data() {
    return {
      tableLabels: [
        { accessor: "name", label: "Name" },
        { accessor: "age", label: "Age" },
        { accessor: "isManager", label: "Manager" },
        { accessor: "startDate", label: "Start Date" },
      ],
      employees: employessData,
      filteredData: [],
    };
  },
  methods: {
    filterData() {
      return (this.filteredData = this.employees.filter((employee) => {
        if (employee.name) return employee;
      }));
    },
  },
  beforeMount: function () {
    this.filterData();    
  },
};
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
