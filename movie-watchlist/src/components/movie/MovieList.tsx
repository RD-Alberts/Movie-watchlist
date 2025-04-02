import { MovieListProps } from "../../interfaces/MovieListProps";
import { MovieCard } from "./MovieCard";

export const MovieList = ({
  movies,
  onDetailsClick,
  onAddWatchlistClick,
}: MovieListProps) => {
  return (
    <div className="mt-8 space-y-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID} // 👈 This must be unique and stable
          {...movie}
          onDetailsClick={onDetailsClick}
          onAddWatchlistClick={onAddWatchlistClick}
        />
      ))}
    </div>
  );
};
