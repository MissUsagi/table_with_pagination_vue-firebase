<template>
  <table-with-pagination v-if="!loadingData"
    :table-labels="tableLabels"
    :employees="filteredData"
  ></table-with-pagination>
</template>

<script>
import TableWithPagination from "./components/TableWithPagination.vue";
// import employessData from "../public/dummyData.js";
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
      employees: [],
      filteredData: [],
      loadingData: true,
    };
  },
  methods: {
    async getData()
    {
      const response = await fetch('https://paginacja-d6d06-default-rtdb.europe-west1.firebasedatabase.app/employees.json');
        const result = await response.json();
        this.employees = result;
        this.filterData();
        this.loadingData = false;
        // console.log(this.filteredData)
        //**************************** */
        //DODAĆ OBSŁUGĘ BŁĘDÓW
    },
    filterData() {
      return (this.filteredData = this.employees.filter((employee) => {
        if (employee.name) return employee;
      }));
    },
  },
  created: function () {
    this.getData();    
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
input {
    padding: 5px;
  }
  
.row {
   display: flex;
   align-items: center;
   text-align: center;
}

.space-between {
  justify-content: space-between;
}
</style>
