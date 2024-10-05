import { useQuery } from "@tanstack/vue-query";
import client from "../client";

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

export default function usePopularMovies() {
  return useQuery({
    queryKey: ["usePopularMovies"],
    queryFn: async () => {
      console.log("Fetching popular movies...");
      const response = await client.get<Movie[]>("/movies/popular");
      console.log(response.data);
      return response.data;
    },
  });
}
