
import "./Home.css";
import {Link} from "react-router-dom";

function Home(){

    return (
      <div className="home-container">
        <Link to="todo" className="btn btn-warning Link">
          To Do App
        </Link>
        <Link to="notes" className="btn btn-warning Link">
          Note Keeper
        </Link>
      </div>
    );
}

export default Home;