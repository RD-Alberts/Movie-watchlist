import { Award, Film, Globe, Languages, Star, User, Users } from "lucide-react";
import { Movie } from "../../interfaces/Movie";

type Rating = {
  Source: string;
  Value: string;
};

interface MovieDetailsModalProps {
  movie: Movie;
}

export const MovieDetailsModal = ({ movie }: MovieDetailsModalProps) => {
  const imdb = movie?.Ratings.find(
    (r: Rating) => r.Source === "Internet Movie Database"
  );
  const rt = movie?.Ratings.find((r: Rating) => r.Source === "Rotten Tomatoes");
  const metacritic = movie?.Ratings.find(
    (r: Rating) => r.Source === "Metacritic"
  );

  const directorList = movie.Director.split(",").map((name) => name.trim());
  const isPlural = directorList.length > 1;

  return (
    <div className="max-h-[80vh] overflow-y-auto pr-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start text-base">
        {/* Poster */}
        <div className="flex justify-center md:justify-start">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="rounded-xl w-full max-w-sm object-cover shadow-lg"
          />
        </div>

        {/* Details */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{movie.Title}</h2>
          <p className="text-sm text-gray-600">
            {movie.Year} • {movie.Runtime} • Rated {movie.Rated}
          </p>

          <div className="space-y-3 text-[15px] leading-relaxed text-gray-800">
            <div className="flex flex-wrap gap-3 mt-2 mb-4">
              {rt && (
                <div className="flex items-center gap-1 text-sm font-medium text-red-600 bg-red-100 px-3 py-1 rounded">
                  🍅 Rotten Tomatoes: {rt.Value}
                </div>
              )}
              {metacritic && (
                <div className="flex items-center gap-1 text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded">
                  🧠 Metacritic: {metacritic.Value}
                </div>
              )}
              {imdb && (
                <div className="flex items-center gap-1 text-sm font-medium text-yellow-600 bg-yellow-100 px-3 py-1 rounded">
                  <Star className="w-4 h-4" />
                  IMDb: {imdb.Value}
                </div>
              )}
            </div>

            <p className="flex items-start gap-3">
              <Film className="w-4 h-4 text-gray-500 mt-1" />
              <span>
                <strong>Genre:</strong> {movie.Genre}
              </span>
            </p>

            <p className="flex items-start gap-3">
              <User className="w-4 h-4 text-gray-500 mt-1" />
              <span>
                <strong>{isPlural ? "Directors" : "Director"}:</strong>{" "}
                {directorList.join(", ")}
              </span>
            </p>

            <p className="flex items-start gap-3">
              <Users className="w-4 h-4 text-gray-500 mt-1" />
              <span>
                <strong>Actors:</strong> {movie.Actors}
              </span>
            </p>
            <p className="flex items-start gap-3">
              <Languages className="w-4 h-4 text-gray-500 mt-1" />
              <span>
                <strong>Language:</strong> {movie.Language}
              </span>
            </p>
            <p className="flex items-start gap-3">
              <Globe className="w-4 h-4 text-gray-500 mt-1" />
              <span>
                <strong>Country:</strong> {movie.Country}
              </span>
            </p>
            <p className="flex items-start gap-3">
              <Award className="w-4 h-4 text-gray-500 mt-1" />
              <span
                className="truncate max-w-[260px] md:max-w-[350px]"
                title={movie.Awards}
              >
                <span className="font-semibold">Awards:</span> {movie.Awards}
              </span>
            </p>

            <div className="border-t pt-4 mt-4">
              <h4 className="font-semibold text-base mb-1">Plot</h4>
              <p className="text-sm text-gray-700">{movie.Plot}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
