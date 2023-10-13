<template>
  <main>
    <BaseInputSearch />
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

<script lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { type User } from '@/types/users.ts'

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
      return favoriteUsers?.value?.findIndex((user: User) => user.url === userUrl) > -1
    }

    const toggleUserToFavorite = (userUrl: User['url'], isFavorite: boolean) => {
      const currentUser = users?.value?.find((user) => user.url === userUrl)
      currentUser.is_favorite = isFavorite
    }

    onMounted(() => {
      getAllUsers()
      favoriteUsers.value = localStorage.getItem('favorites')
        ? JSON.parse(localStorage.getItem('favorites') ?? '')
        : []
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
