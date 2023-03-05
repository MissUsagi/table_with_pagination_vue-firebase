<template>
   <div class="alert-box glass">
      <h3>{{ warningTxt }}</h3>
      <div>
         <base-button @click="alertEmit($event)" :value="caseOne" :btnTxt="caseOne"
            mode="no-outline success rounded transparent-btn"></base-button>
         <base-button @click="alertEmit($event)" :value="caseTwo" :btnTxt="caseTwo" mode="no-outline warning rounded transparent-btn"></base-button>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      warningTxt: {
         type: String,
         required: true,
         default: null
      },
      caseOne: {
         type: String,
         required: true,
         default: null
      },
      caseTwo: {
         type: String,
         required: true,
         default: null
      }
   },
   methods: {
      alertEmit(e) {
         const response = e.target.value;
         this.$emit('alertResponse', response);
      }
   }
}
</script>

<style scoped lang="scss">
$widthA: 500px;
.alert-box {
   position: absolute;
   width: $widthA;
   height: $widthA / 2;
   top: 20%;
   right: calc(50% - #{$widthA} / 2);
   text-align: center;
   border-radius: 10px;
   color: var(--dark-grey);

   h3 {
      font-size: 1.6rem;
      padding: 15% 10px 30px;
   }

   button {
      font-weight: bold;
      min-width: 80px;
      margin: 0 7px;
      padding: 15px 45px;
   }
}
</style>
