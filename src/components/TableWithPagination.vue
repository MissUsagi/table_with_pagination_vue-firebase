<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th v-for="label in tableLabels" :key="label.accessor">
            <div class="label-row">
              <h3>{{ label.label }}</h3>
              <div class="sort-section">
                <base-button mode="outline" @click="sortData(label.accessor, 'asc')" :key="label.accesstor">
                  {{ "▲" }}
                </base-button>
                <base-button mode="outline" @click="sortData(label.accessor, 'desc')" :key="label.accesstor">
                  {{ "▼" }}
                </base-button>
              </div>
            </div>
          </th>
        </tr>
        <tr class="search-row">
          <td>
            <search-component class="search-comp" @clearInput="updateVisibleData" @search-event="search($event, 'name')"
              my-placeholder="Search by name"></search-component>
          </td>
          <td>
            <search-component class="search-comp" @clearInput="updateVisibleData" @search-event="search($event, 'age')"
              my-placeholder="Search by age"></search-component>
          </td>
          <td>
            <div class="row search-comp">
              <radio-button id-prop="manager" name-prop="isManager" :value-prop="true" label-prop="Managers"
                @checkboxChange="search($event, 'isManager')"></radio-button>
              <radio-button id-prop="notManager" name-prop="isManager" :value-prop="false" label-prop="Others"
                @checkboxChange="search($event, 'isManager')"></radio-button>
              <radio-button id-prop="clear" name-prop="isManager" :value-prop="null" label-prop="All Employees"
                @checkboxChange="clearInput"></radio-button>
            </div>
          </td>
          <td>
            <div class="row search-comp">
              <base-callendar @clearInput="updateVisibleData"
                @select-date="search($event, 'startDate')"></base-callendar>
              <base-button mode="basic" @click="clearInput">Clear</base-button>
            </div>
          </td>
        </tr>
      </thead>
      <tbody>
        <show-employees :visible-data="visibleData"></show-employees>
      </tbody>
    </table>
    <pagination-component :current-Page="currentPageIndex" :pages="pagesInTotal" @my-event="changePage"
      @update-table-size="updateTableSize"></pagination-component>
  </div>
</template>


<script>
import BaseButton from './BaseButton.vue';
import PaginationComponent from "./PaginationComponent.vue";
import SearchComponent from "./SearchComponent.vue";
import ShowEmployees from './ShowEmployees.vue';
export default {
  components: { PaginationComponent, SearchComponent, ShowEmployees, BaseButton },
  props: ["tableLabels", "employees"],
  data() {
    return {
      employeesArray: this.employees,
      pagesInTotal: null,
      recordsPerPage: 9,
      currentPageIndex: 0,
      visibleData: [],
    };
  },
  mounted: function () {
    this.updateVisibleData();
  },
  methods: {
      calcNumberOfPages(inputArray) {
      return this.pagesInTotal = Math.ceil(inputArray.length / this.recordsPerPage)
    },
    updateVisibleData(inputArray=this.employeesArray) {
      this.calcNumberOfPages(inputArray);
      const sliceFrom = this.currentPageIndex * this.recordsPerPage;
      const sliceTo = (this.currentPageIndex * this.recordsPerPage) + this.recordsPerPage;
      this.visibleData = inputArray.slice(sliceFrom, sliceTo);
      // console.log(`Slice from ${sliceFrom} Slice to ${sliceTo} Recordsperpage ${this.recordsPerPage}`)
      // console.log(inputArray.length)
    },

    search(inputValue, property) {
      if (inputValue) {
        this.visibleData = this.employeesArray.filter((person) => {
          if (
            person[property]
              .toString()
              .toLowerCase()
              .includes(inputValue.toString().toLowerCase())
          )
            return person;
        });
      }
      this.calcNumberOfPages(this.visibleData)
      // this.updateVisibleData(this.visibleData)
    },
    clearInput() {
      this.searchInput = "";
      this.updateVisibleData();
    },
    changePage(page) {
      const newPageIndex = page;
      this.currentPageIndex = newPageIndex;
      this.updateVisibleData();
    },
    updateTableSize(tableSize) {
      this.recordsPerPage = tableSize;
      this.currentPageIndex = 0;
      this.updateVisibleData();
    },

    sortData(propertyName, sortingOrder) {
      const propComparator = (propName) => (a, b) => {
        //sortowanie dat 
        if (propName === "startDate") {
          const first = new Date(a.startDate);
          const second = new Date(b.startDate);
          if (sortingOrder === "asc") {
            return first === second ? 0 : first < second ? -1 : 1;
          }
          else return first === second ? 0 : first > second ? -1 : 1;
        }
        //**** */   

        if (sortingOrder === "asc") {
          return a[propName] === b[propName]
            ? 0
            : a[propName] < b[propName]
              ? -1
              : 1;
        }
        else if ((sortingOrder === "desc")) {
          return a[propName] === b[propName]
            ? 0
            : a[propName] > b[propName]
              ? -1
              : 1;
        }
      }
      this.employeesArray.sort(propComparator(propertyName));
      this.updateVisibleData();
    }
  }
};
</script>

<style scoped lang="scss">
table {
  th {
    text-transform: uppercase;
    text-align: left;
    background: #44475c;
    color: #fff;
    padding: 4px;
    min-width: 50px;
  }

  td {
    min-width: 250px;
    text-align: left;
    padding: 8px;
    /* border-right: 2px solid #7D82A8; */
  }

  .label-row {
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .search-row {
    background-color: #83e0b8;
  }
}

.container {
  margin: 5px auto 10px auto;
  padding: 0 0 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #333;
}

.search-comp {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sort-section {
  display: flex;
  align-items: center;

  button {
    &:hover {
      background: rgb(109, 73, 104) !important;
      scale: 1.05;
    }

    &:focus {
      background: rgb(8, 189, 68) !important;
      color: lavender;
    }
  }
}
</style>