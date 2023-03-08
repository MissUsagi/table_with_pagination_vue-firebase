<template>
  <div class="input-container">
    <label v-if="labelProp" :id="idProp">{{ labelProp }}</label>
    <input 
      :id="idProp"
      :type="inputType"
      :placeholder="placeholderProp"
      :value="valueProp"
      :class="mode"
      @input="updateInput"
    />
  </div>
</template>
 
 <script>
export default {
  props: {
    inputType: {
      type: String,
      default: "text",
    },
    idProp: {
      type: String,
      default: "",
    },
    valueProp: {
      type: [String, Number, Boolean],
      default: null,
    },
    labelProp: {
      type: String,
      default: null,
    },
    placeholderProp: {
      type: String,
      default: null,
    },
    mode: {
      type: String,
    },
  },
  methods: {
    updateInput(e) {
      let input = e.target.value;
      this.$emit("update-input", input);
    },
  },
};
</script>
 

<style scoped lang="scss">
$labelWidth: 160px;
.input-container {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  // flex: 0 0 3em;
}
label {
  width: $labelWidth;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--dark-grey);
}
input {
  width: 100%;
  padding: 8px 15px 8px 10px;
  border: none;
  box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.1);
  background: rgba($color: #fff, $alpha: 1);
  &.rounded {
    border-radius: 5px;
  }
  &.basic {
    border: 1px solid rgb(118, 118, 118);
    box-shadow: none;
  }
  &:focus {
    outline: solid 2px var(--sea-green);
  }
}
</style>