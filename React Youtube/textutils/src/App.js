import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar aboutText="AboutText" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analize below" />
        <button className="btn btn-primary">Conver to uppercase</button>
      </div>
    </>
  );
}

export default App;
