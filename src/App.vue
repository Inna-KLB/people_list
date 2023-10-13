<template>
  <nav>
    <RouterLink to="/peoples">Peoples</RouterLink>
    <RouterLink to="/favorite">Favorite</RouterLink>
  </nav>
  <RouterView />
</template>

<script lang="ts">
import { onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    onMounted(() => {
      const favoriteUsers = localStorage.getItem('favorites')
        ? JSON.parse(localStorage.getItem('favorites') ?? '')
        : []
      store.commit('setFavoriteUsers', favoriteUsers)
    })
  }
}
</script>
