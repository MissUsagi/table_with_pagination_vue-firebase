<template>
           <tr>
          <th v-for="label in tableLabels" :key="label.accessor">
            <div class="label-row">
              <h3>{{ label.label }}</h3>
              <div class="sort-section">
                <base-button mode="outline light" @click="sortData(label.accessor, 'asc')" :key="label.accesstor"
                  btn-txt="&#9650;">
                </base-button>
                <base-button mode="outline light" @click="sortData(label.accessor, 'desc')" :key="label.accesstor"
                  btn-txt="&#9660;">
                </base-button>
              </div>
            </div>
          </th>
          <th class="actions"><div class="label-row"><h3>Actions</h3></div></th>
        </tr>
        <tr class="search-row">
          <td>
            <search-component class="search-comp" @clear-input="clearInput" @search-event="search($event, 'name')"
              my-placeholder="Search by name"></search-component>
          </td>
          <td>
            <search-component class="search-comp" @clear-input="clearInput" @search-event="search($event, 'age')"
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
              <base-calendar @select-date="search($event, 'startDate')"></base-calendar>
              <base-button mode="basic" @click="clearInput" btn-txt="Cancel"></base-button>
            </div>
          </td>
          <td></td>
        </tr>
</template>

<script>
export default {
   props: ['tableLabels', 'employees'],
   data() {
    return {
      searchOn: false,
      employeesArray: this.employees,
    };
  },
  methods: {
       search(inputValue, property) {
      this.searchOn = true;
      if (inputValue) {
        this.searchResult = this.employeesArray.filter((person) => {
          if (
            person[property]
              .toString()
              .toLowerCase()
              .includes(inputValue.toString().toLowerCase())
          )
            return person;
        });
      }
      this.calcNumberOfPages(this.searchResult)
      this.updateVisibleData(this.searchResult)
    },
    clearInput() {
      this.searchOn = false;
      this.updateVisibleData();
      this.goToPage(0);
    },

    sortData(propertyName, sortingOrder) {
      const propComparator = (propName) => (a, b) => {
        let first = a[propName];
        let second = b[propName];

        if (propName === "startDate") {
          first = new Date(a.startDate);
          second = new Date(b.startDate);
        }

        if (sortingOrder === "asc") {
          return first < second ? -1 : 1;
        } else return first > second ? -1 : 1;
      }
      this.employeesArray.sort(propComparator(propertyName));
      this.updateVisibleData();
    }
  }
}
</script>

<style scoped lang="scss">
table {
  th {
    text-transform: uppercase;
    text-align: left;
    background: var(--primary-color);
    color:  var(--base-white);
    padding: 4px;
    // min-width: 50px;
  }
.label-row {
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .search-row {
    background-color: var(--mint-green)
  }
}

.sort-section {
  display: flex;
  align-items: center;

  button {
    &:focus {
      background: var(--complementary);
      color: var(--base-white);
    }
  }
}
</style>