import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  // if (!movies.nowPlayingMovie) return;
  // console.log(movies, "secondary");

  return (
    movies.nowPlayingMovie &&
    movies.popularMovie && (
      <div className=" bg-black">
        <div className="-mt-20 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovie} />
          <MovieList title={"Trending"} movies={movies?.nowPlayingMovie} />
          <MovieList title={"Popular"} movies={movies?.popularMovie} />
          <MovieList
            title={"Upcoming movies"}
            movies={movies?.nowPlayingMovie}
          />
          <MovieList title={"Horror movies"} movies={movies?.nowPlayingMovie} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
