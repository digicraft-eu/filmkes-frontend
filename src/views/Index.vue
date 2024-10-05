<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getPopularMovies, Movie } from "../backend/api";
import Loader from "../components/Loader.vue";
import MovieItem from "../components/MovieItem.vue";

const movies = ref<Movie[]>();
const moviesLoading = ref(false);

onMounted(async () => {
  moviesLoading.value = true;
  movies.value = await getPopularMovies();
  moviesLoading.value = false;
});
</script>

<template>
  <h1>Popular movies</h1>

  <Loader v-if="moviesLoading" />
  <div class="movies" v-else>
    <MovieItem v-for="movie in movies" :movie="movie" />
  </div>
</template>

<style lang="scss" scoped>
.movies {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
</style>
