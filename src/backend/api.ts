import client from "./client";

export type MovieSnippet = {
  id: number;
  title: string;
  poster_path: string;
};

export async function getPopularMovies() {
  const response = await client.get<MovieSnippet[]>("/movies");
  return response.data;
}

export type MovieGenre = {
  id: number;
  name: string;
};

export type MovieDetails = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  score: number;
};

export async function getMovieDetails(movieId: number) {
  const response = await client.get<MovieDetails>(`/movies/${movieId}`);
  return response.data;
}

export async function getMovieScore(movieId: number) {
  const response = await client.get(`/scores/${movieId}`);
  return response.data;
}

export async function updateMovieScore(movieId: number, score: number) {
  await client.post(`/scores/${movieId}`, score);
}
