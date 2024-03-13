import React from "react";

class MovieCard extends React.Component {
  constructor() {
    super();
    //Creating the state object
    this.state = {
      title: "The Avengers",
      plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      rating: "8.0",
      price: 199,
    };
  }
  addStars(){
    console.log("star added");
  }

  render() {
    //Destructing the state object in render function
    const { title, plot, poster, price, rating } = this.state;

    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img alt="poster" src={poster}/>
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
                  onClick={this.addStars}
                />

                <span className="starCount">0</span>
              </div>

              <button className="favourite-btn"> Favorite</button>
              <button className="cart-btn"> Add t cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;