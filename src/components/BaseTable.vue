<template>
  <table class="user-table">
    <tr class="user-table__header">
      <th>Name</th>
      <th>Height</th>
      <th>Mass</th>
      <th>Hair color</th>
      <th>Action</th>
    </tr>
    <tr v-for="(user, idx) in data" :key="idx">
      <td>{{ user.name }}</td>
      <td>{{ user.height }}</td>
      <td>{{ user.mass }}</td>
      <td>{{ user.hair_color }}</td>
      <td>
        <BaseButton :type="user.is_favorite ? 'delete' : 'add'" />
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
export default {
  name: 'BaseTable',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {}
}
</script>
