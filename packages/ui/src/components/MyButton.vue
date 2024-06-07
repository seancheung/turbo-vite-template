<template>
  <button>{{ text }}</button>
</template>

<script setup lang="ts">
interface Props {
  text: string
}

defineProps<Props>()
</script>
