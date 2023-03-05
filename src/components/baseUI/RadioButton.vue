<template>
  <label :for="idProp" class="custom-radio-btn">
    <input
      type="radio"
      :id="idProp"
      :name="nameProp"
      :value="valueProp"
      checked=""
      @change="$emit('checkboxChange', $event.target.value)"
    />
    <span class="checkmark"> {{ labelProp }} </span>
  </label>
</template>

<script>
export default {
  props: ["idProp", "nameProp", "valueProp", "labelProp"],
};
</script>

<style scoped lang="scss">
input[type="radio"] {
  display: none;
  &:checked + span {
    background-color: rgba(white, 0.4);
    &:before {
      box-shadow: inset 0 0 0 7px var(--purple);
      background-color: var(--base-white);
    }
  }
}

label {
  display: block;
  cursor: pointer;
  white-space: nowrap;
  font-weight: 500;

  span {
    display: inline-flex;
    align-items: center;
    text-align: center;
    padding: 10px;
    margin: 0 5px;
    border-radius: 20px;
    transition: 0.25s ease;
    &:hover {
      background-color: rgba(white, 0.4);
    }
    &::before {
      content: "";
      background-color: var(--base-white);
      width: 24px;
      height: 24px;
      box-shadow: inset 0 0 0 3px var(--purple);
      border-radius: 50%;
      margin-right: 10px;
      transition: 0.25s ease;
    }
  }
}
</style>