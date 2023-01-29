<template>
   <div class="container">
      <table>
         <thead @click="filter">
            <tr>
               <th v-for="column in columns" :key="column.accessor">{{ column.label }} <span
                     @click="sortData">Sort</span></th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td class="input-row"><input type="type" placeholder="Search Name" @input="searchName($event)">
                  <!-- <span @click="sortData">Sortuj</span> -->
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
      <pagination-component :current-Page="currentPage" :pages="pagesInTotal" @my-event="changePage"
         @table-size="updatePage"></pagination-component>
   </div>
</template>

<script>
import PaginationComponent from './PaginationComponent.vue';
export default {
   components: { PaginationComponent },
   props: ['columns', 'rows'],
   data() {
      return {
         data: this.rows,
         pageSize: 3,
         currentPage: 0,
         visibleData: [],
         pagesInTotal: null,
      }
   },
   mounted: function () {
      this.updateVisibleData()
   },
   methods: {
      updateVisibleData() {
         this.pagesInTotal = Math.ceil(this.data.length / this.pageSize);
         this.visibleData = this.data.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize)
         console.log(this.currentPage)
      },
      searchName(e) {
         const searchedPerson = e.target.value;
         console.log(searchedPerson)
         if (e.target.value) {
            this.visibleData = this.data.filter(person => {
               if (person.name.toLowerCase().includes(searchedPerson.toLowerCase()))
                  return person
            });
         }
         else this.updateVisibleData();

      },

      changePage(page) {
         const pageIndex = page;
         this.currentPage = pageIndex;
         this.updateVisibleData();
      },
      updatePage(size) {
         this.pageSize = size;
         this.currentPage = 0;
         this.updateVisibleData();
      },
      sortData() {
         // const sortedTable = [...this.data];
         // console.log(sortedTable)
         this.data.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
               return -1;
            }
            if (nameA > nameB) {
               return 1;
            }
            return 0;
         });
         this.updateVisibleData();
      }
   }
}

</script>

<style scoped>
.container {
   margin-right: auto;
   margin-left: auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   border: 1px solid #333;
}

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

.input-row {
   display: flex;
   align-items: flex-start;
   justify-content: space-between;
}

.input-row span {
   font-weight: bold;
   cursor: pointer;
}

.input-row input,
span {
   padding: 5px;
}
</style>