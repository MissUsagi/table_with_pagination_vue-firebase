<template>
   <div class="glass container">
      <div class="content">
      <base-input label-prop="Name" :value-prop="employee.name" @update-value="updateData($event, 'name')"></base-input>
      <base-input label-prop="Age" :value-prop="employee.age" @update-value="updateData($event, 'age')"></base-input>
      <base-input label-prop="Manager" :value-prop="employee.isManager" @update-value="updateData($event, 'isManager')"></base-input>
      <base-input label-prop="Start date" :value-prop="employee.startDate" @update-value="updateData($event, 'startDate')"></base-input>
   </div>
   <div class="btn-row">
   <base-button mode="outline success rounded transparent-btn" btnTxt="Save" @click="saveChanges"></base-button>
   <base-button mode="outline warning rounded transparent-btn" btnTxt="Cancel"></base-button>
</div>
   </div>
</template>

<script>
export default{
   props: ['employee'],
   data(){
      return {
         editedData: this.employee,
      }
   },
   methods: {
      updateData(e, property){
         let newValue = e.target.value;
         this.editedData[property] = newValue;
      },
      saveChanges(){
     console.log(this.editedData)
     this.$emit('editEmployeeDetails', this.editedData)
      }
   }
}
</script>

<style scoped lang="scss">
   $width: 600px;
   $height: 400px;
   $gap: 12px;

.container {
   position:absolute;
   top: $width/3;
   left: calc(50% - #{$width}/2);
   width: $width;
   min-height: $height;
   padding: 60px 30px;
}
.content{
   display: flex;
   flex-direction: column;
   gap: 2em;
}
.btn-row{
   bottom: 0;
   margin-top: $gap * 4;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   gap: $gap;
   button{
   min-width: calc(50% - #{$gap}/2);
   padding: $gap;
}
}

</style>