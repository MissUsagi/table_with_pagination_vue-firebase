<template>
   <div class="container">
      <table>
         <thead @click="filter">
            <tr>
               <th v-for="label in tableLabels" :key="label.accessor">{{ label.label }} 
                  <base-button mode="outline" @click="sortData(label.accessor)">Sort</base-button ></th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>
                  <div class="search">
                  <input type="type" placeholder="Search Name" v-model="searchInput" @input="searchName($event)">
                  <base-button mode="basic" @click="clearInput()">Clear</base-button>
               </div>
               </td>
            </tr>
            <tr v-for="row in visibleData" :key="row.id">
               <td>{{ row.name }}</td>
               <td>{{ row.age }}</td>
               <td><span>{{ row.is_manager ? '✔️' : '✖️' }}</span> {{ row.is_manager }}</td>
               <td>{{ row.start_date }}</td>
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
      updatePage(size) {
         this.recordsPerPage = size;
         this.currentPageIndex = 0;
         this.updateVisibleData();
      },

      sortData(arg) {  //toggle do sortowania
         const columnToSort = arg.toLowerCase();

         if(this.sortAscending){
            this.sortAsc(columnToSort);
         }
         else {
           this.sortDesc(columnToSort);
         }
         this.updateVisibleData();
         this.sortAscending = !this.sortAscending;
      },
//brakuje sortowania daty********** pomyslec nad lepszym rozwiazaniem
      sortAsc(arg) {
            this.employeesArray.sort((a, b) => {
               if(typeof a[arg] === 'string'){ 
               const nameA = a[arg].toUpperCase();
               const nameB = b[arg].toUpperCase();
               if (nameA < nameB) {
                  return -1;
               }
               if (nameA > nameB) {
                  return 1;
               }
               return 0;}
              else return a[arg]-b[arg];
            });
      },

      sortDesc(arg) {
            this.employeesArray.sort((a, b) => {
               if(typeof a[arg] === 'string'){
               const nameA = a.name.toUpperCase();
               const nameB = b.name.toUpperCase();
               if (nameA > nameB) {
                  return -1;
               }
               if (nameA < nameB) {
                  return 1;
               }
               return 0;
            }
            else return b[arg]-a[arg];
         });
         }
   }
}

</script>

<style scoped>
table th {
   position: relative;
   text-transform: uppercase;
   text-align: left;
   background: #44475C;
   color: #FFF;
   padding: 8px;
   min-width: 50px;
}

table td {
   min-width: 250px;
   text-align: left;
   padding: 8px;
   /* border-right: 2px solid #7D82A8; */
}

table td:last-child {
   border-right: none;
}

table tbody tr:nth-child(2n) td {
   background: #D4D8F9;
}

span {
   /* position: absolute; */
   cursor: pointer;
   right: 0;
   top: 3px;
}

.container {
   margin-right: auto;
   margin-left: auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   border: 1px solid #333;
}

.search {
   display: flex;
   flex-direction: row;
   align-items: center;
   row-gap: 10px;
}
.search input {
   padding: 5px;}
</style>