<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getMovieDetails, MovieDetails } from "../backend/api";
import Loader from "../components/Loader.vue";
import MoviePoster from "../components/MoviePoster.vue";
import Grade from "../components/grade.vue";

const route = useRoute();
const id = computed(() => Number.parseInt(route.params.movieId as string));

const movieDetails = ref<MovieDetails>();
const detailsLoading = ref(false);

onMounted(async () => {
  detailsLoading.value = true;
  movieDetails.value = await getMovieDetails(id.value);
  detailsLoading.value = false;
});

</script>
<template>
  <Loader v-if="detailsLoading" />

  <article v-else-if="movieDetails === undefined">
    <h1>Movie not found</h1>
  </article>

  <article v-else>
    <header>
      <h1>{{ movieDetails.title }}</h1>
      <aside>
        <Grade :grade="1" @grade-changed="(v) => console.log('grade', v)"/>
      </aside>
    </header>
    <div class="posterAndText">
      <MoviePoster
        :poster_path="movieDetails.poster_path"
        :width="500"
      />
      <div>
        <p>
          <h2>Plot</h2>
          {{ movieDetails.overview }}
        </p>
        <h3>Genres</h3>
        <ul>
          <li v-for="genre in movieDetails.genres">
            {{ genre.name }}
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
}
.posterAndText {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1rem;
}
</style>
