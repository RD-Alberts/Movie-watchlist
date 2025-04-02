import { useState } from "react";
import { PrimaryButton } from "../components/PrimaryButton";
import { Search } from "lucide-react";
import { Modal } from "../components/Modal";
import { Movie } from "../interfaces/Movie";
import { MovieDetailsModal } from "../components/movie/MovieDetailsModal";
import { MovieList } from "../components/movie/MovieList";
import { SelectField } from "../components/fields/SelectField";

export const Homepage = () => {
  const apiKey = ""; // 🔑 Replace with your real key

  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Movie[]>([]);

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [sortBy, setSortBy] = useState<
    "year-asc" | "year-desc" | "title-asc" | "title-desc"
  >("year-asc");

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

  const sortedResults = [...results].sort((a, b) => {
    switch (sortBy) {
      case "year-asc":
        return parseInt(a.Year) - parseInt(b.Year);
      case "year-desc":
        return parseInt(b.Year) - parseInt(a.Year);
      case "title-asc":
        return a.Title.localeCompare(b.Title);
      case "title-desc":
        return b.Title.localeCompare(a.Title);
      default:
        return 0;
    }
  });

  const sortOptions = [
    { value: "year-asc", label: "Year ↑" },
    { value: "year-desc", label: "Year ↓" },
    { value: "title-asc", label: "Title A–Z" },
    { value: "title-desc", label: "Title Z–A" },
  ];

  return (
    <div className="max-w-xl mx-auto text-center mt-10 space-y-6">
      <h1 className="text-2xl font-semibold">Movie Search</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevents page refresh
          fetchMovie();
        }}
        className="flex items-center gap-2 justify-center"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie title"
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <PrimaryButton
          type="submit"
          label="Search"
          icon={Search}
          isLoading={false}
          variant="primary"
        />
      </form>

      <div className="max-w-xs mx-auto">
        <SelectField
          label="Sort by"
          name="sortBy"
          value={sortBy}
          onChange={(e) =>
            setSortBy(
              e.target.value as
                | "year-asc"
                | "year-desc"
                | "title-asc"
                | "title-desc"
            )
          }
          options={sortOptions}
        />
      </div>

      {sortedResults.length > 0 && (
        <MovieList
          movies={sortedResults}
          onDetailsClick={handleDetailsClick}
          onAddWatchlistClick={handleAddWatchlist}
        />
      )}

      {selectedMovie && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <MovieDetailsModal movie={selectedMovie} />
        </Modal>
      )}
    </div>
  );
};
