<template>
  <table-with-pagination v-if="!loadingData" :table-labels="tableLabels"
    :employees="filteredData"></table-with-pagination>
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
    async getData() {
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

<style lang="scss">
:root{
--base-white: white;
--mint-green:  #83e0b8;
--sea-green: #07BEB8;
--primary-color:  #32373B;
--secondary-color: #d4d8f9;
--secondary-light: #f0f1fc;
--dark-purple: rgb(102, 68, 102);
--light-purple: #a2a2c7;
--dark-grey: #333;
--purple: purple;
--complementary: #F0B207;
--complementary-light: #fff8f5;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

.p-2 {
  padding: 2px;
}

.m-2 {
  margin: 2px;
}

.space-between {
  justify-content: space-between;
}

.glass {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 24px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  border-radius: 7px;
  border: 1px solid rgba(255, 255, 255, 0.336);
}

</style>
