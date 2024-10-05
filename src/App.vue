<script setup lang="ts">
import usePopularMovies from "./backend/queries/usePopularMovies";
import MoviePoster from "./components/MoviePoster.vue";

const movies = usePopularMovies();
</script>

<template>
  <h1>Popular movies</h1>
  <div class="posters">
    <MoviePoster v-for="movie in movies.data.value" :movie="movie" />
  </div>
</template>

<style lang="scss" scoped>
.posters {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
</style>
