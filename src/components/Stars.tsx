import { PiStarFill } from "react-icons/pi";

type Props = {
  rating: number;
  onSelect: (value: number) => void;
};

const Stars = ({ rating, onSelect }: Props) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <PiStarFill
            key={star}
            onClick={() => onSelect(star)}
            className={`size-5 cursor-pointer ${star <= rating ? "text-yellow-500" : "text-gray-400"}`}
          />
        );
      })}
    </div>
  );
};

export default Stars;
