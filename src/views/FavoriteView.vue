<template>
  <main>
    <BaseTable v-if="favoriteUsers.length" :data="favoriteUsers" />
    <div v-else v-text="'You don\'t have favorite users :('" />
  </main>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { type User } from '@/types/users.ts'
import { computed } from 'vue'

const store = useStore()

const favoriteUsers = computed<User[]>(() => store.getters.favoriteUsers)
</script>

<style lang="scss">
.favorite {
  background: #d4a0a0;
  h1 {
    color: gray;
  }
}
</style>
