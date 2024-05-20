function MovieCard(props) {
  const { movies, addStars, onDecStars, onClickFav, onClickAddtocart } = props;

  const { title, plot, poster, price, rating, stars, fav, isIncart } =
    props.movies;

  return (
    <div className="main">
      <div className="movie-card">
        <div className="left">
          <img alt="poster" src={poster} />
        </div>
        <div className="right">
          <div className="title">{title}</div>
          <div className="plot">{plot}</div>
          <div className="price">Rs. {price}</div>
          <div className="footer">
            <div className="rating">{rating}</div>
            <div className="star-dis">
              <img
                className="str-btn"
                alt="Decrease"
                src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                onClick={() => onDecStars(movies)}
              />
              <img
                alt="star"
                src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                className="stars"
              />
              <img
                className="str-btn"
                alt="increase"
                src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                onClick={() => {
                  addStars(movies);
                }}
              />

              <span className="starCount">{stars}</span>
            </div>

            {/* {fav ? (
                <button className="unfavourite-btn" onClick={handleFav}>
                  Un-Favorite{" "}
                </button>
              ) : (
                <button className="favourite-btn" onClick={handleFav}>
                  Favorite
                </button>
              )} */}

            {/* color changing of Fav button  */}
            <button
              className={fav ? "unfavourite-btn" : "favourite-btn"}
              onClick={() => onClickFav(movies)}
            >
              {fav ? "Un-Favorite" : "Favorite"}
            </button>

            {/* color changing of Add to Cart button  */}
            <button
              className={isIncart ? "unfavourite-btn" : "cart-btn"}
              onClick={() => onClickAddtocart(movies)}
            >
              {isIncart ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
