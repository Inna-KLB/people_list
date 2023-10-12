<template>
  <button :class="['btn', `btn--${type}`]">
    <BaseIcon :type="type" />
    {{ textBtn }}
  </button>
</template>

<script lang="ts">
import { computed } from 'vue'
import BaseIcon from './BaseIcon.vue'

export default {
  name: 'BaseButton',
  components: { BaseIcon },
  props: {
    type: {
      type: String,
      default: 'add',
      validator: (value) => {
        return ['delete', 'add'].includes(value)
      }
    }
  },
  setup(props) {
    const textBtn = computed(() =>
      props.type === 'add' ? 'Добавить в избранное' : 'Удалить из избранного'
    )

    return {
      textBtn
    }
  }
}
</script>

<style></style>
