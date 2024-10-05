<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import * as api from "../backend/api";
import { MovieDetails } from "../backend/api";
import Loader from "../components/Loader.vue";
import MoviePoster from "../components/MoviePoster.vue";
import Score from "../components/Score.vue";

const route = useRoute();
const id = computed(() => Number.parseInt(route.params.movieId as string));

const movieDetails = ref<MovieDetails>();
const detailsLoading = ref(false);
const movieScore = ref<number | undefined>(undefined);
const updatingMovieScore = ref(false);

onMounted(async () => {
  detailsLoading.value = true;
  movieDetails.value = await api.getMovieDetails(id.value);
  movieScore.value = await api.getMovieScore(id.value);
  detailsLoading.value = false;
});

async function saveNewScore(newScore: number) {
  updatingMovieScore.value = true;
  await api.updateMovieScore(id.value, newScore);
  movieScore.value = newScore;
  updatingMovieScore.value = false;
}
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
        <Loader v-if="updatingMovieScore" />
        <Score v-else :value="movieScore" @score-changed="saveNewScore" />
      </aside>
    </header>
    <div class="posterAndText">
      <MoviePoster :poster_path="movieDetails.poster_path" :width="500" />
      <div>
        <h2>Plot</h2>
        <p>
          {{ movieDetails.overview }}
        </p>
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
