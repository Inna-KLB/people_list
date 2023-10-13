<script lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    const user = computed(() => store.getters.chosenUser)

    return {
      user
    }
  }
}
</script>

<template>
  <h2>People profile page</h2>
  <pre>{{ user }}</pre>
</template>
