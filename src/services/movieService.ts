import axios from "axios";
import type { Movie } from "../types/movies";

interface MoviesHttpResponce {
  results: Movie[];
}

const token = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (topic: string): Promise<Movie[]> => {
  try {
    const response = await axios.get<MoviesHttpResponce>(
      `https://api.themoviedb.org/3/search/movie`,
      {
        params: {
          query: topic,
          include_adult: false,
          language: "en-US",
          page: 1,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error("Помилка при запиті:", error);
    toast.error("Failed to fetch movies. Please try again.");
    return [];
  }
};
