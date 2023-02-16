<template>
   <div class="row">
      <input type="date" id="start-date" name="start-date" min="2000-01-01" :value="getTodaysDate()" @input="datePick($event)">
   </div>
</template>

<script>
export default {
   emits: ['selectDate'],
//  data(){
// return {
//    selectedDate: ''
// }
//  },
 methods: {
   getTodaysDate(){
      const todaysDate = new Date;
      const zerofill = value => (value < 10 && value > -1 ? '0' : "") + value;
      const todayIs = `${todaysDate.getFullYear()}-${zerofill(todaysDate.getMonth() + 1)}-${zerofill(todaysDate.getDate())}`;
      return todayIs;   
   },
   datePick(e){
      const selectedDate = e.target.value; //rr-mm-dd
      const reformatedDate = selectedDate.split('-').reverse().join('-');
      this.$emit('selectDate', reformatedDate);
   }
 },
}
</script>
