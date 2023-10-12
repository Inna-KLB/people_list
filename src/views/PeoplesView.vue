<script lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'

type User = {
  name: string
  height: string
  mass: string
  hair_color: string
}

export default {
  name: 'PeoplesView',
  setup() {
    const isLoadingContent = ref(false)

    const users = ref<User[]>()

    const getAllUsers = () => {
      isLoadingContent.value = true
      axios
        .get('https://swapi.dev/api/people/')
        .then(function ({ data }) {
          users.value = data.results.map((user: User) => ({
            name: user.name,
            height: user.height,
            mass: user.mass,
            hair_color: user.hair_color,
            is_favorite: false
          }))
        })
        .catch(function (error) {
          console.log(error)
        })
        .finally(function () {
          isLoadingContent.value = false
        })
    }

    onMounted(() => {
      getAllUsers()
    })

    return {
      isLoadingContent,
      users
    }
  }
}
</script>

<template>
  <main v-if="!isLoadingContent">
    <h2>Peoples page</h2>

    <BaseTable :data="users" />
  </main>
  <div v-else>Load data...</div>
</template>
