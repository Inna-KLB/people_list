<script lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'

export type User = {
  name: string
  height: string
  mass: string
  hair_color: string
  url: string
  is_favorite?: boolean
}

export default {
  name: 'PeoplesView',
  setup() {
    const isLoadingContent = ref(false)

    const users = ref<User[]>()
    const favoriteUsers = ref<User[]>()

    const textError = ref('')

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
            is_favorite: checkFavorite(user.url),
            url: user.url
          }))
          isLoadingContent.value = false
        })
        .catch(function (error) {
          console.log(error)
          textError.value = 'Something went wrong. Try it later :('
        })
    }

    const checkFavorite = (userUrl: User['url']) => {
      return !!favoriteUsers?.value?.find((user: User) => user.url === userUrl)
    }

    const toggleUserToFavorite = (userUrl: User['url'], isFavorite: boolean) => {
      const currentUser = users?.value?.find((user) => user.url === userUrl)
      currentUser.is_favorite = isFavorite
    }

    onMounted(() => {
      getAllUsers()
      favoriteUsers.value = JSON.parse(localStorage.getItem('favorites') ?? '')
      console.log('🚀 ~ onMounted ~  favoriteUsersJson.value:', favoriteUsers.value)
    })

    return {
      isLoadingContent,
      users,
      textError,
      toggleUserToFavorite
    }
  }
}
</script>

<template>
  <main>
    <BaseTable
      v-if="!isLoadingContent"
      :data="users"
      @toggle-favorite="
        (url: User['url'], favoriteState: boolean) => toggleUserToFavorite(url, favoriteState)
      "
    />
    <div v-else v-text="textError || 'Loading data...'" />
  </main>
</template>
