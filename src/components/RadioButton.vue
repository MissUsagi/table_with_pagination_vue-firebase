<template>
      <label :for="idProp">
   <input type="radio" :id="idProp" :name="nameProp" :value="valueProp" checked="" @change="$emit('checkboxChange', $event.target.value)">
   {{ labelProp }}
</label>
</template>

<script>
export default {
   props: ['idProp', 'nameProp', 'valueProp', 'labelProp']
}
</script>

<style scoped lang="scss">
input {
   text-align: center;
   margin: 0 3px 0 5px;
}

label {  
   margin: 0 10px;
   font-size: 1rem;
}
</style>