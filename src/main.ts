import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Index from "./views/Index.vue";
import Layout from "./views/Layout.vue";
import MovieDetails from "./views/MovieDetails.vue";

const app = createApp(Layout);

const routes = [
  { path: "/", component: Index },
  { path: "/movies/:movieId", component: MovieDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.mount("#app");
