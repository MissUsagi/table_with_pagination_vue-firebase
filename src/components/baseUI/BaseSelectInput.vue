<template>
   <div class="input-container">
      <label v-if="labelProp" :for="name">{{ labelProp }}</label>
         <select :name="name" @change="selectOption" v-model="optionSelected">
            <option v-for="option in options" :value="option" >{{ option }}</option>
         </select>    
   </div>
</template>

<script>
export default {
props: {
   labelProp: {
      type: String,
      required: false
   },
   name: {
      type: String,
      required: false
   },
   options: {
      type: Array,
   },
   selected: {
      type: Number
   }
},
data(){
   return {
      optionSelected: this.selected,
   }
},
methods: {
   selectOption(e){
      let selected = e.target.value;
      this.$emit('select-option', selected)
   }
}
}
</script>

<style scoped lang="scss">
.input-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.1rem;
}
label {
   margin-right: 10px;
   // font-weight: bold;
  color: var(--dark-grey);
}
select{
   padding: 5px;
   border-radius: 5px;
   outline-color: var(--complementary);
}

</style>

