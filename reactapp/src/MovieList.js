import React from "react";
import MovieCard from "./Moviecard";

// const { title, plot, poster, price, rating, stars, fav, isIncart } =
//   this.state.movies;
const MoviList = ({
  movies,
  addStars,
  onDecStars,
  onClickFav,
  onClickAddtocart,
}) => {
  return (
    <>
      {movies.map((movie, index) => (
        <MovieCard
          movies={movie}
          key={movie.id}
          addStars={addStars}
          onDecStars={onDecStars}
          onClickFav={onClickFav}
          onClickAddtocart={onClickAddtocart}
        />
      ))}
    </>
  );
};

export default MoviList;
