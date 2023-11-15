<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useStore } from 'vuex'
import { type User } from '@/types/users.ts'

const store = useStore()

const userFull = computed<User>(() => store.getters.chosenUser)

const favoriteUsers = computed<User[]>(() => store.getters.favoriteUsers)

const isFavoriteUser = computed(() =>
  favoriteUsers?.value.find((user: User) => user.url === userFull.value.url) ? true : false
)

const user = reactive<User>({
  name: userFull.value.name,
  height: userFull.value.height,
  mass: userFull.value.mass,
  hair_color: userFull.value.hair_color,
  is_favorite: isFavoriteUser.value,
  url: userFull.value.url
})
</script>

<template>
  <main>
    <BaseTable :data="[user]" />
  </main>
</template>
