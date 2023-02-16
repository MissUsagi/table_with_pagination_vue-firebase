<template>
         <tr v-for="person in visibleData" :key="person.id">
          <td>{{ person.name }}</td>
          <td>{{ person.age }}</td>
          <td>
            <span>{{ person.isManager ? "✔️" : "✖️" }}</span>
            {{ person.isManager }}
          </td>
          <td>{{ person.startDate }}</td>
        </tr>
</template>

<script>
export default {
   props: ['visibleData']
}
</script>

<style scoped >
  td {
    min-width: 250px;
    text-align: left;
    padding: 8px;
  }

  td:last-child {
    border-right: none;
  }

 tr td {
    background: #d4d8f9;
  }

  tr:nth-child(2n) td {
    background: #f0f1fc;
  }
  </style>