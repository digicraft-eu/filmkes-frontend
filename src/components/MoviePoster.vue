<script setup lang="ts">
import { Movie } from "../backend/queries/usePopularMovies";

defineProps<{ movie: Movie }>();
</script>

<template>
  <a :href="`/movies/${movie.id}`">
    <img :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" />
    <span>{{ movie.original_title }}</span>
  </a>
</template>

<style lang="scss" scoped>
a {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  img {
    width: 100%;
  }
}
span {
  // margin: 0 22px;
}
</style>
