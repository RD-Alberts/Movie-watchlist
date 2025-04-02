import { Info, PlusCircle } from "lucide-react";
import { MovieCardProps } from "../../interfaces/MovieCardProps";
import { PrimaryButton } from "../PrimaryButton";

export const MovieCard = ({
  Title,
  Year,
  Poster,
  imdbID,
  onDetailsClick,
  onAddWatchlistClick,
}: MovieCardProps) => {
  return (
    <div className="p-4 border rounded-md shadow-sm flex justify-between items-center gap-4">
      <div className="flex items-center gap-4">
        <img src={Poster} alt={Title} className="w-20 h-auto rounded" />
        <div>
          <h3 className="text-lg font-semibold">{Title}</h3>
          <p className="text-sm text-gray-600">{Year}</p>
        </div>
      </div>

      <div className="flex gap-2">
        <PrimaryButton
          label="Details"
          icon={Info}
          variant="info"
          isLoading={false}
          onClick={() => onDetailsClick?.(imdbID)}
        />

        <PrimaryButton
          label="Add"
          icon={PlusCircle}
          variant="success"
          isLoading={false}
          onClick={() => onAddWatchlistClick?.(imdbID)}
        />
      </div>
    </div>
  );
};
