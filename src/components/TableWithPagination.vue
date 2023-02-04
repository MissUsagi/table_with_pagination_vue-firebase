<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th v-for="label in tableLabels" :key="label.accessor">
            <div class="label-row">
              <h3>{{ label.label }}</h3>
              <div class="sort-section">
                <span>Sort</span>
                <base-button mode="outline" @click="sortData(label.accessor, 'asc')" :key="label.accesstor">
                {{ "▲" }}
              </base-button>
              <base-button mode="outline" @click="sortData(label.accessor, 'desc')" :key="label.accesstor">
                {{"▼" }}
              </base-button>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <search-component class="search-comp" @clearInput="updateVisibleData" @search-event="search($event, 'name')"
              my-placeholder="Search by name"></search-component>
          </td>
          <td>
            <search-component class="search-comp" @clearInput="updateVisibleData" @search-event="search($event, 'age')"
              my-placeholder="Search by age"></search-component>
          </td>
          <td>
            <search-component class="search-comp" @clearInput="updateVisibleData"
              @search-event="search($event, 'isManager')" my-placeholder="Is a manager?"></search-component>
          </td>
          <td>
            <search-component class="search-comp" @clearInput="updateVisibleData"
              @search-event="search($event, 'startDate')" my-placeholder="Search by date"></search-component>
          </td>
        </tr>
        <tr v-for="person in visibleData" :key="person.id">
          <td>{{ person.name }}</td>
          <td>{{ person.age }}</td>
          <td>
            <span>{{ person.isManager ? "✔️" : "✖️" }}</span>
            {{ person.isManager }}
          </td>
          <td>{{ person.startDate }}</td>
        </tr>
      </tbody>
    </table>
    <pagination-component :current-Page="currentPageIndex" :pages="pagesInTotal" @my-event="changePage"
      @update-table-size="updatePage"></pagination-component>
  </div>
</template>


<script>
import BaseButton from "./BaseButton.vue";
import PaginationComponent from "./PaginationComponent.vue";
import SearchComponent from "./SearchComponent.vue";
export default {
  components: { PaginationComponent, BaseButton, SearchComponent },
  props: ["tableLabels", "employees"],
  data() {
    return {
      employeesArray: this.employees,
      recordsPerPage: 3,
      currentPageIndex: 0,
      visibleData: [],
      pagesInTotal: null,
      searchInput: "",
    };
  },
  mounted: function () {
    this.updateVisibleData();
  },
  methods: {
    updateVisibleData() {
      this.pagesInTotal = Math.ceil(
        this.employeesArray.length / this.recordsPerPage
      );
      const sliceFrom = this.currentPageIndex * this.recordsPerPage;
      const sliceTo = (this.currentPageIndex * this.recordsPerPage) + this.recordsPerPage;
      this.visibleData = this.employeesArray.slice(sliceFrom, sliceTo);      
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
    },

    clearInput() {
      this.searchInput = "";
      this.updateVisibleData();
    },

    changePage(page) {
      const currentPageIndex = page;
      this.currentPageIndex = currentPageIndex;
      this.updateVisibleData();
    },
    updatePage(tableSize) {
      this.recordsPerPage = tableSize;
      this.currentPageIndex = 0;
      this.updateVisibleData();
    },

    sortingOrderToggle(){
      return this.sortingOrder === "asc" ? this.sortingOrder = "desc" : this.sortingOrder = "asc"
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
      this.sortingOrderToggle();
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

  td:last-child {
    border-right: none;
  }

  tbody tr:nth-child(2n) td {
    background: #d4d8f9;
  }

  .label-row {
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
button{
  &:hover {
    background: rgb(109, 73, 104);
    scale: 1.05;
  }
  &:focus{ 
    background: rgb(8, 189, 68);
    color: lavender;
  }
}
  .sort-section {
    display: flex;
    align-items: center;
    span {    
    font-size: 1.3rem;
    margin-right: 15px;
    }
  }
</style>