<template>
  <table class="user-table">
    <tr class="user-table__header">
      <th>Name</th>
      <th class="text-right">Height</th>
      <th class="text-right">Mass</th>
      <th>Hair color</th>
      <th>Action</th>
    </tr>
    <tr v-for="(user, idx) in data" :key="idx" class="user-table__row">
      <td>{{ user.name }}</td>
      <td class="text-right">{{ user.height }}</td>
      <td class="text-right">{{ user.mass }}</td>
      <td>{{ user.hair_color }}</td>
      <td>
        <BaseButton :type="user.is_favorite ? 'delete' : 'add'" @click="actionUser(user)" />
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import { PropType, ref } from 'vue'
import { type User } from '@/types/users'
import { useStore } from 'vuex'

export default {
  name: 'BaseTable',
  props: {
    data: {
      type: Array as PropType<User[]>,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const store = useStore()

    const favoriteUsers = ref<User[]>([])
    favoriteUsers.value = props.data.filter((user: User) => user.is_favorite)
    const actionUser = (user: User) => {
      store.commit('toggleFavoriteUser', user)
      emit('toggle-favorite', user.url, !user.is_favorite)
    }

    return {
      actionUser
    }
  }
}
</script>
