<template>
   <div class="container">
      <table>
         <thead>
            <tr>
               <th v-for="label in tableLabels" :key="label.accessor"><div class="label-row"><h3>{{ label.label }} </h3>
                  <base-button mode="outline" @click="sortData(label.accessor)"> Sort 
                  <!-- {{ sortAscending ? "Sort ▲" : "Sort ▼" }} -->
               </base-button></div></th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>
                  <div class="search-row">
                  <input type="type" placeholder="Search Name" v-model="searchInput" @input="searchName($event)">
                  <base-button mode="basic" @click="clearInput()">Clear</base-button>
               </div>
               </td>
            </tr>
            <tr v-for="person in visibleData" :key="person.id">
               <td>{{ person.name }}</td>
               <td>{{ person.age }}</td>
               <td><span>{{ person.is_manager ? '✔️' : '✖️' }}</span> {{ person.is_manager }}</td>
               <td>{{ person.start_date }}</td>
            </tr>
         </tbody>
      </table>
      <pagination-component :current-Page="currentPageIndex" :pages="pagesInTotal" @my-event="changePage"
         @table-size="updatePage"></pagination-component>
   </div>
</template>


<script>
import BaseButton from './BaseButton.vue';
import PaginationComponent from './PaginationComponent.vue';
export default {
   components: { PaginationComponent, BaseButton },
   props: ['tableLabels', 'employees'],
   data() {
      return {
         employeesArray: this.employees,
         recordsPerPage: 3,
         currentPageIndex: 0,
         visibleData: [],
         pagesInTotal: null,
         sortAscending: true,
         searchInput: ''
      }
   },
   mounted: function () {
      this.updateVisibleData()
   },
   methods: {
      updateVisibleData() {
         this.pagesInTotal = Math.ceil(this.employeesArray.length / this.recordsPerPage);
         this.visibleData = this.employeesArray.slice(this.currentPageIndex * this.recordsPerPage, (this.currentPageIndex * this.recordsPerPage) + this.recordsPerPage)
      },

      searchName(e) {
         const searchedPerson = e.target.value;
         if (e.target.value) {
            this.visibleData = this.employeesArray.filter(person => {
               if (person.name.toLowerCase().includes(searchedPerson.toLowerCase()))
                  return person
            });
         }
         else this.updateVisibleData();
      },

      clearInput(){
         this.searchInput = '';
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

      sortData(propertyName){ //Taski -> asc desc toggle w templatce ->  sortowanie daty
         const sortByProperty = propertyName.toLowerCase();
         const propComparator = (propName) =>
          (a, b) => 
          {  
            if(this.sortAscending)
            { 
               if (propName === "start_date")
               //american date format mm/dd/yyyy
               {
                  const first = new Date(a.start_date);
                  const second = new Date(b.start_date);
                  return first === second ? 0 : first < second ? -1 : 1;
               }
               else return a[propName] === b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1;
            }

            else if(!this.sortAscending) {
               if (propName === "start_date")
               {
                  const first = new Date(a.start_date);
                  const second = new Date(b.start_date);
                  return first === second ? 0 : first > second ? -1 : 1;
               }
               return a[propName] === b[propName] ? 0 : a[propName] > b[propName] ? -1 : 1; 
            }
        }
         this.employeesArray.sort(propComparator(sortByProperty))
         this.updateVisibleData();
         this.sortAscending = !this.sortAscending; 
      }

   }
}

</script>

<style scoped lang="scss">
table {
   th {
   text-transform: uppercase;
   text-align: left;
   background: #44475C;
   color: #FFF;
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
   background: #D4D8F9;
}
.label-row {
   padding: 5px;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
}
}


span {
   /* position: absolute; */
   cursor: pointer;
   right: 0;
   top: 3px;
}

.container {
   margin: 5px auto 10px auto;
   padding: 0 0 15px 0;
   display: flex;
   flex-direction: column;
   justify-content: center;
   border: 1px solid #333;
}

.search-row {
   display: flex;
   flex-direction: row;
   align-items: center;
   row-gap: 10px;
   
   input {
   padding: 5px;
} }
</style>