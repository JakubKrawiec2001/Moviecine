import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

type Props = {
  rating: number;
  changeRating: (newRating: number) => void;
  numberOfStars: number;
};

const StarRating = ({ rating, changeRating, numberOfStars }: Props) => {
  const [hoverRating, setHoverRating] = useState(0);
  const reviewDesc = (rating: number) => {
    switch (rating) {
      case 1:
        return "Disaster";
      case 2:
        return "Very Bad";
      case 3:
        return "Bad";
      case 4:
        return "Below Average";
      case 5:
        return "Average";
      case 6:
        return "Above Average";
      case 7:
        return "Good";
      case 8:
        return "Very Good";
      case 9:
        return "Great";
      case 10:
        return "Masterpiece";
      default:
        return "";
    }
  };

  const stars = [];
  for (let i = 1; i <= numberOfStars; i++) {
    stars.push(
      <span
        key={i}
        onMouseEnter={() => setHoverRating(i)}
        onMouseLeave={() => setHoverRating(0)}
        onClick={() => changeRating(i)}
        className="cursor-pointer transition-colors text-5xl"
      >
        {i <= (hoverRating || rating) ? (
          <FaStar className="text-yellow-500" />
        ) : (
          <FaRegStar className="text-slate-200" />
        )}
      </span>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2">
        <p className="text-white text-4xl">{hoverRating || rating}</p>
        <p className="text-white text-4xl">
          {reviewDesc(hoverRating || rating)}
        </p>
      </div>
      <div className="flex items-center justify-center">{stars}</div>;
    </div>
  );
};

export default StarRating;
