<template>
  <tr v-for="person in visibleData" :key="person.id">
    <td>{{ person.name }}</td>
    <td>{{ person.age }}</td>
    <td>
      <span>{{ person.isManager ? "✔️" : "✖️" }}</span>
      {{ person.isManager }}
    </td>
    <td>{{ person.startDate }}</td>
    <td>
      <div class="options">
        <base-button class="m-2" mode="no-outline" @click="showEditForm(person)"
          ><img src="../../public/images/edit.png" alt="Edit"
        /></base-button>
        <base-button class="m-2" mode="no-outline" @click="showAlert(person)"
          ><img src="../../public/images/bin.png" alt="Delete"
        /></base-button>
      </div>
    </td>
  </tr>
  <base-alertbox
    v-if="alertVisibility"
    :warningTxt="alertMsg"
    caseOne="Yes"
    caseTwo="No"
    :valueTrue="true"
    :valueFalse="false"
    @alert-response="deleteConfirmation($event)"
  ></base-alertbox>
  <edit-component
    v-if="editFormVisibility"
    :employee="dataToEdit"
    @save-changes="editDetails($event)"
    @close-window="editFormVisibility = false"
  ></edit-component>
</template>

<script>
import EditComponent from "./EditComponent.vue";
export default {
  components: { EditComponent },
  props: ["visibleData"],
  // emits: ['refresh-data'],
  data() {
    return {
      alertMsg: "Are you sure?",
      alertVisibility: false,
      editFormVisibility: false,
    };
  },
  methods: {
    showAlert(person) {
      this.alertVisibility = true;
      this.alertMsg = `Delete ${person.name} from the list?`;
      return (this.dataToRemove = person);
    },
    showEditForm(person) {
      this.editFormVisibility = true;
      this.dataToEdit = person;
    },
    deleteConfirmation(e) {
      let userDecision = e.toLowerCase() === "yes" ? true : false;
      if (userDecision === true) {
        this.deleteEmployee();
      } else this.alertVisibility = false;
    },
    deleteEmployee() {
      console.log(this.dataToRemove);
      // this.alertMsg = `Data deleted successfully!`;
      //ZAPYTANIE DO API
    },

    editDetails(e) {
      const dataToEdit = e;
      this.updateEmployeesData(dataToEdit, dataToEdit.id);
      this.editFormVisibility = false;
    },

    async updateEmployeesData(employee, index) {
      console.log(employee, index);
      const response = await fetch(
        `https://paginacja-d6d06-default-rtdb.europe-west1.firebasedatabase.app/employees/${index}.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application.json",
          },
          body: JSON.stringify(employee),
        }
      );
      const result = response.json();
      console.log(result);
      document.location.reload(); //temporary - change into API request
    },
  },
};
</script>

<style scoped >
.options {
  text-align: center;
}
td {
  /* min-width: 200px; */
  /* text-align: left; */
  padding: 4px 8px;
}

td:last-child {
  border-right: none;
}

tr td {
  background: var(--secondary-color);
}

tr:nth-child(2n) td {
  background: var(--secondary-light);
}
</style>