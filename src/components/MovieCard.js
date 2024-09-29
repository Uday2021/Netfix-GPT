import React from "react";
import { IMG_ICON_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="Movie card" src={IMG_ICON_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
