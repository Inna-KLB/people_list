<template>
  <div class="input-container">
    <input v-model="inputSearch" type="text" placeholder="Введите имя" @keyup.enter="getUsers" />
    <div v-if="foundedUsers || isLoading" class="input-container__results">
      <ul v-if="!isLoading" class="results">
        <li
          v-for="(user, idx) in foundedUsers"
          :key="idx"
          class="results__item"
          @click="goToUser(user)"
        >
          {{ user.name }}
        </li>
      </ul>
      <div v-else v-text="emptyText" class="results__empty" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { type User } from '@/types/users.ts'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'BaseInput',
  setup() {
    const router = useRouter()
    const store = useStore()

    const inputSearch = ref('')

    const isLoading = ref(false)
    const emptyText = ref('')

    const foundedUsers = ref<User[]>()

    const getUsers = () => {
      isLoading.value = true
      emptyText.value = 'Loading data...'
      axios
        .get(`https://swapi.dev/api/people/?search=${inputSearch.value}`)
        .then(function ({ data }) {
          if (inputSearch.value.length) {
            foundedUsers.value = data.results
            if (foundedUsers.value?.length) {
              isLoading.value = false
            } else {
              emptyText.value = 'No results :('
            }
          }
        })
        .catch(function (error) {
          console.log(error)
          emptyText.value = 'No results :('
        })
    }

    const goToUser = (user: User) => {
      store.commit('setChosenUser', user)
      const urlArray = user.url.split('/')
      const idUserIndex = urlArray.length - 2

      router.push({ name: 'peoples-profile', params: { id: idUserIndex } })
    }

    return {
      inputSearch,
      foundedUsers,
      isLoading,
      emptyText,
      goToUser,
      getUsers
    }
  }
}
</script>
