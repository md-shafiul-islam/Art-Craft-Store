import React from "react";

const RatingCard = ({ rating = 0, ...props }) => {
  return (
    <div className="rating rating-md">
      <input
        type="radio"
        name="rating-7"
        className="mask mask-star-2 bg-orange-400"
        checked={rating >= 1 ? true : false}
      />
      <input
        type="radio"
        name="rating-7"
        className="mask mask-star-2 bg-orange-400"
        checked={rating >= 2 ? true : false}
      />
      <input
        type="radio"
        name="rating-7"
        className="mask mask-star-2 bg-orange-400"
        checked={rating >= 3 ? true : false}
      />
      <input
        type="radio"
        name="rating-7"
        className="mask mask-star-2 bg-orange-400"
        checked={rating >= 4 ? true : false}
      />
      <input
        type="radio"
        name="rating-7"
        className="mask mask-star-2 bg-orange-400"
        checked={rating >= 5 ? true : false}
      />
    </div>
  );
};

export default RatingCard;
