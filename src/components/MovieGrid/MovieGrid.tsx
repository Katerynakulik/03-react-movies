import type { Movie } from "../../types/movies";
import css from "./MovieGrid.module.css";

interface MovieGridProps {
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
}

export default function MovieGrid({ movies, onSelectMovie }: MovieGridProps) {
  const placeholderImage =
    "https://media.istockphoto.com/id/1478374885/de/foto/fr%C3%B6hliche-familie-die-film-im-kino-sieht.jpg?s=2048x2048&w=is&k=20&c=nK-Secl8nJkcWP2mbA4eDCW3gAiDWhNDgiS_FprTYr0=";
  return (
    <ul className={css.grid}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <div className={css.card} onClick={() => onSelectMovie(movie)}>
            <img
              className={css.image}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : placeholderImage
              }
              alt={movie.title}
              loading="lazy"
            />
            <h2 className={css.title}>{movie.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}
