<script setup lang="ts">
import { MovieSnippet } from "../backend/api";
import MoviePoster from "./MoviePoster.vue";

defineProps<{ movie: MovieSnippet }>();
</script>

<template>
  <RouterLink :to="`/movies/${movie.id}`">
    <MoviePoster :poster_path="movie.poster_path" />
    <span>{{ movie.title }}</span>
  </RouterLink>
</template>

<style lang="scss" scoped>
a {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
