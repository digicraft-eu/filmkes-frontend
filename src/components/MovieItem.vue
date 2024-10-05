<script setup lang="ts">
import { Movie } from "../backend/api";
import MoviePoster from "./MoviePoster.vue";

defineProps<{ movie: Movie }>();
</script>

<template>
  <RouterLink :to="`/movies/${movie.id}`">
    <MoviePoster :poster_path="movie.poster_path" />
    <span>{{ movie.original_title }}</span>
  </RouterLink>
</template>

<style lang="scss" scoped>
a {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
