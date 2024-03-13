import React from "react";

class MovieCard extends React.Component{
    render(){
        return (
          <div className="main">
            <div className="movie-card">
              <div className="left">
                <img alt="Poster" />
              </div>
              <div className="right">
                <div className="title">The Avengers</div>
                <div className="plot">Supernatural power shown in the movie</div>
                <div className="price">Rs. 199</div>
                <div className="footer">
                  <div className="rating">8.9</div>
                  <div className="stars">star</div>
                  <butoon className="favourite-btn"> Favorite</butoon>
                  <butoon className="cart-btn"> Add t cart</butoon>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default MovieCard;