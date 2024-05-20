import React from "react";
import MovieCard from "./Moviecard";


class MoviList extends React.Component {
  render() {
    // const { title, plot, poster, price, rating, stars, fav, isIncart } =
    //   this.state.movies;
    const { movies, addStars, onDecStars, onClickFav, onClickAddtocart } =
      this.props;

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
  }
}

export default MoviList;
