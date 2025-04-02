import { Movie } from "./Movie";

export interface MovieListProps {
    movies: Pick<Movie, 'Title' | 'Year' | 'Poster' | 'imdbID'>[]; // keep the card data minimal
    onDetailsClick?: (id: string) => void;
    onAddWatchlistClick?: (id: string) => void;
  }