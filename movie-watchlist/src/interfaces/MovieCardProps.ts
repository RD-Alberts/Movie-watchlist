import { Movie } from "./Movie";

// Only uses title, year, poster and imbdID from the movie interface
export interface MovieCardProps extends Pick<Movie, 'Title' | 'Year' | 'Poster' | 'imdbID'> {
    onDetailsClick?: (imdbID: string) => void;
    onAddWatchlistClick?: (imdbID: string) => void;
  }
  