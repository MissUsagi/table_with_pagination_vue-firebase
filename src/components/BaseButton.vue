<template>
   <button :class="mode"><slot></slot></button>
</template>

<script>
export default {
   props:{
      mode:{
         type: String,
         required: false,
         default: null
      },
   }

}
</script>


<style scoped>
button {
cursor: pointer;
padding: 5px 15px;
font-size: 1.1rem;
}

button:hover{
   background: rgb(162, 162, 199);
}
.basic {
color: white;
background-color: rgb(102, 68, 102);
border: none;
}
.outline {
  background-color: transparent;
  border: 1px solid white;
  color: white
}
</style>