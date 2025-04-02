import { useState } from "react";
import { PrimaryButton } from "../components/PrimaryButton";
import { Search } from "lucide-react";
import { MovieCard } from "../components/movie/MovieCard";
import { Modal } from "../components/Modal";

// Define the shape of the movie object
interface Movie {
  Title: string;
  Plot: string;
  Poster: string;
  Response: string;
  [key: string]: any; // Allows extra fields from the API without TypeScript errors
}

export const Homepage = () => {
  const apiKey = ""; // 🔑 Replace with your real key

  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Movie[]>([]);

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchMovie = async () => {
    const res = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`
    );
    const data: Movie = await res.json();
    setResults(data.Search || []);
  };

  const handleAddWatchlist = (imdbID: string) => {
    console.log("Add to watchlist:", imdbID);
    // Save to state/localStorage/backend/etc
  };

  const handleDetailsClick = async (imdbID: string) => {
    const res = await fetch(
      `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`
    );
    const data: Movie = await res.json();
    setSelectedMovie(data);
    console.log(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <div className="max-w-xl mx-auto text-center mt-10 space-y-6">
      <h1 className="text-2xl font-semibold">Movie Search</h1>

      <div className="flex items-center gap-2 justify-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie title"
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <PrimaryButton
          onClick={fetchMovie}
          label="Search"
          icon={Search}
          isLoading={false}
          variant="primary"
        />
      </div>

      {results.length > 0 && (
        <div className="mt-8 space-y-4">
          {[...results]
            .sort((a, b) => parseInt(a.Year) - parseInt(b.Year)) // ascending by year
            .map((movie) => (
              <MovieCard
                key={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
                imdbID={movie.imdbID}
                onDetailsClick={handleDetailsClick}
                onAddWatchlistClick={handleAddWatchlist}
              />
            ))}
        </div>
      )}

{selectedMovie && (
  <Modal
    isOpen={isModalOpen}
    onClose={handleCloseModal}
    title={selectedMovie.Title}
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
  {/* Poster section */}
  <div className="flex justify-center">
    <img
      src={selectedMovie.Poster}
      alt={selectedMovie.Title}
     className="w-[280px] md:w-[300px] lg:w-[350px] rounded-xl shadow-md object-cover"
    />
  </div>

  {/* Info section */}
  <div className="space-y-4 text-base text-gray-800">
    <p className="text-gray-600 text-sm">
      {selectedMovie.Year} • {selectedMovie.Runtime} • Rated {selectedMovie.Rated}
    </p>

    <p><span className="font-bold">Genre:</span> {selectedMovie.Genre}</p>
    <p><span className="font-bold">Director:</span> {selectedMovie.Director}</p>
    <p><span className="font-bold">Actors:</span> {selectedMovie.Actors}</p>
    <p><span className="font-bold">Language:</span> {selectedMovie.Language}</p>
    <p><span className="font-bold">Country:</span> {selectedMovie.Country}</p>

    <p className="flex items-center gap-1">
      <span className="font-bold">IMDb Rating:</span>
      <span className="flex items-center gap-1 text-yellow-500">★ {selectedMovie.imdbRating}/10</span>
    </p>

    <p><span className="font-bold">Awards:</span> {selectedMovie.Awards}</p>

    <div>
      <h4 className="text-lg font-semibold mt-4">Plot</h4>
      <p className="text-sm text-gray-700">{selectedMovie.Plot}</p>
    </div>
  </div>
</div>

  </Modal>
)}

    </div>
  );
};
