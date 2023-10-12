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
import { User } from '@/views/PeoplesView.vue'

export default {
  name: 'BaseTable',
  props: {
    data: {
      type: Array as PropType<User[]>,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const favoriteUsers = ref<User[]>([])
    favoriteUsers.value = props.data.filter((user: User) => user.is_favorite)
    const actionUser = (user: User) => {
      if (!user.is_favorite) {
        favoriteUsers.value.push(user)
        emit('toggle-favorite', user.url, true)
      } else {
        const userId = favoriteUsers.value.findIndex((usr) => user.url === usr.url)
        favoriteUsers.value.splice(userId, 1)
        emit('toggle-favorite', user.url, false)
      }
      localStorage.setItem('favorites', JSON.stringify(favoriteUsers.value))
    }

    return {
      actionUser
    }
  }
}
</script>
