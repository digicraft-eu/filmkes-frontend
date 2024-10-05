<script setup lang="ts">
withDefaults(defineProps<{ poster_path: string; width?: number }>(), {
  width: 200,
});
</script>

<template>
  <img :src="`https://image.tmdb.org/t/p/w${width}${poster_path}`" />
</template>

<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
