<template>
  <table-with-pagination
    :table-labels="tableLabels"
    :employees="filteredData"
  ></table-with-pagination>
</template>

<script>
import TableWithPagination from "./components/TableWithPagination.vue";
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
      employees: [
        {
          id: 1,
          name: "Liz Lemon",
          age: 36,
          isManager: true,
          startDate: "02-11-1999",
        },
        {
          id: 2,
          name: "Jack Donaghy",
          age: 40,
          isManager: true,
          startDate: "03-05-1997",
        },
        {
          id: 3,
          name: "Tracy Morgan",
          age: 39,
          isManager: false,
          startDate: "07-12-2002",
        },
        {
          id: 4,
          name: "Jenna Maroney",
          age: 40,
          isManager: false,
          startDate: "02-28-1999",
        },
        {
          id: 5,
          name: "Kenneth Parcell",
          age: 48,
          isManager: false,
          startDate: "01-01-1970",
        },
        {
          id: 6,
          name: "Pete Hornberger",
          age: 52,
          isManager: true,
          startDate: "04-01-2000",
        },
        {
          id: 7,
          name: "Frank Rossitano",
          age: 36,
          isManager: false,
          startDate: "02-01-2014",
        },
        { id: 8, name: null, age: null, isManager: null, startDate: null },
        {
          id: 9,
          name: "Beatrix Doe",
          age: 29,
          isManager: true,
          startDate: "04-05-2020",
        },
        {
          id: 10,
          name: "Sam Smith",
          age: 28,
          isManager: false,
          startDate: "04-11-2022",
        },
        {
          id: 11,
          name: "Jill Jones",
          age: 31,
          isManager: true,
          startDate: "08-24-2017",
        },
        {
          id: 12,
          name: "Pete Doe",
          age: 35,
          isManager: false,
          startDate: "12-03-2019",
        },
        {
          id: 13,
          name: "Kat More",
          age: 27,
          isManager: false,
          startDate: "12-06-2022",
        },
        {
          id: 14,
          name: "John Doe",
          age: 25,
          isManager: true,
          startDate: "03-10-2018",
        },
      ],
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
