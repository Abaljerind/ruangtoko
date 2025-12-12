import { PiStarFill } from "react-icons/pi";

const Stars = () => {
  return (
    <div className="flex items-center">
      <PiStarFill className="size-5 text-yellow-500" />
      <PiStarFill className="size-5 text-yellow-500" />
      <PiStarFill className="size-5 text-yellow-500" />
      <PiStarFill className="size-5 text-yellow-500" />
      <PiStarFill className="size-5 text-gray-400" />
    </div>
  );
};

export default Stars;
