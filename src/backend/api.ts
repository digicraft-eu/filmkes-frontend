import client from "./client";

export type Movie = {
  id: number;
  genre_ids: number[];
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
};

export async function getPopularMovies() {
  const response = await client.get<Movie[]>("/movies/popular");
  return response.data;
}

export type MovieGenre = {
  id: number;
  name: string;
};

export type MovieDetails = {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: MovieGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export async function getMovieDetails(movieId: number) {
  const response = await client.get<MovieDetails>(`/movies/${movieId}`);
  return response.data;
}
