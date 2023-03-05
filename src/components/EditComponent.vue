<template>
  <div class="glass container">
    <div class="content">
      <base-input
        mode="rounded"
        label-prop="Name"
        input-type="text"
        :value-prop="employee.name"
        @update-input="updateData($event, 'name')"
      ></base-input>
      <base-input
      mode="rounded"
        label-prop="Age"
        input-type="number"
        :value-prop="employee.age"
        @update-input="updateData($event, 'age')"
      ></base-input>
      <base-input
      mode="rounded"
        label-prop="Manager"
        input-type="text"
        :value-prop="employee.isManager"
        @update-input="updateData($event, 'isManager')"
      ></base-input>
      <base-input
      mode="rounded"
        label-prop="Start date"
        input-type="text"
        :value-prop="employee.startDate"
        @update-input="updateData($event, 'startDate')"
      ></base-input>
    </div>
    <div class="btn-row">
      <base-button
        mode="outline success rounded transparent-btn"
        btnTxt="Save"
        @click="saveChanges"
      ></base-button>
      <base-button
        mode="outline warning rounded transparent-btn"
        btnTxt="Cancel"
        @click="closeEditWindow"
      ></base-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["employee"],
  emits: ["save-changes"],
  data() {
    return {
      editedData: { ...this.employee },
    };
  },
  methods: {
    updateData(event, property) {
      this.editedData[property] = event;
    },
    saveChanges() {
      this.$emit("save-changes", this.editedData);
    },
    closeEditWindow(){
      this.$emit("close-window")
    }
  },
};
</script>

<style scoped lang="scss">
$width: 600px;
$height: 400px;
$gap: 12px;

.container {
  position: absolute;
  top: $width/3;
  left: calc(50% - #{$width}/ 2);
  width: $width;
  min-height: $height;
  padding: 60px 30px;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 2em;
}
.btn-row {
  bottom: 0;
  margin-top: $gap * 4;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: $gap;
  button {
    min-width: calc(50% - #{$gap}/ 2);
    padding: $gap;
  }
}
</style>