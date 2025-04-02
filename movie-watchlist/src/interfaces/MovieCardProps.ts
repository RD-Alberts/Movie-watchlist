export interface MovieCardProps {
    title: string;
    year: string;
    poster: string;
    imdbID: string;
    onDetailsClick?: (imdbID: string) => void;
    onAddWatchlistClick?: (imdbID: string) => void;
}
  