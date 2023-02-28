<template>
   <div class="content">
   <label id="idProp">{{ labelProp }}</label><input id="idProp" name="nameProp" type="text" :placeholder="placeholderProp" :value="valueProp">
   </div>
</template>

<script>
export default {
   props: {
      valueProp: {
         type: String,
         required: true,
         default: null
      },
     labelProp: {
         type: String,
         required: true,
         default: null
      }
   }
}
</script>

<style scoped lang="scss">
*{
   --labelWidth: 160px;
}
.content{
   display: flex;
   flex-direction: row;
   align-items: flex-end;
   // flex: 0 0 3em;
}
label{
   width: var(--labelWidth);
   text-transform: uppercase;
   font-size: 1.1rem;
   font-weight: bold;
   color: var(--dark-grey);
}
input{
   width: 100%;
   padding: 10px;
}
input[type="text"]{
   border-radius: 5px;
   border: none;
   box-shadow:1px 1px 1px 2px rgba(0, 0, 0, 0.1);
   background: rgba($color: #fff, $alpha: 1);
   &:focus{
      outline: solid 2px var(--sea-green);
   }
}
</style>