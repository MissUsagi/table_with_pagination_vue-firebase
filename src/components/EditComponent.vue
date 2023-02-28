<template>
   <div class="glass container">
      <div class="content">
      <base-input label-prop="Name" :value-prop="dataToEdit.name"></base-input>
      <base-input label-prop="Age" :value-prop="dataToEdit.age"></base-input>
      <base-input label-prop="Manager" :value-prop="dataToEdit.isManager"></base-input>
      <base-input label-prop="Start date" :value-prop="dataToEdit.startDate"></base-input>
   </div>
   <div class="btn-row">
   <base-button mode="outline success rounded transparent-btn" btnTxt="Save"></base-button>
   <base-button mode="outline warning rounded transparent-btn" btnTxt="Cancel"></base-button>
</div>
   </div>
</template>

<script>
export default{
   data(){
      return {
         dataToEdit: {
            name: 'Jack',
            age: '34',
            isManager: 'false',
            startDate: '03-12-2022'
         },
      }
   }
}
</script>

<style scoped lang="scss">
*{
   --width: 600px;
   --height: 400px;
}

.container {
   position:absolute;
   top: calc(var(--width)/3);
   left: calc(50% - var(--width)/2);
   width: var(--width);
   min-height: var(--height);
   padding: 60px 30px;
}
.content{
   display: flex;
   flex-direction: column;
   gap: 2em;
}
.btn-row{
   bottom: 0;
   --gap: 12px;
   margin-top: calc(var(--gap) * 4);
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   gap: var(--gap);
   button{
   min-width: calc(50% - var(--gap)/2);
   padding: var(--gap);
}
}

</style>