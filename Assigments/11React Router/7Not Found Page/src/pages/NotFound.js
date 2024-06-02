// import hook here
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const Navigate = useNavigate();
  // create back funtion here
  function handleBack(){
    
     Navigate("/");
    

  }

  return (
    <div className="not-found page">
      <h3>Page not found.</h3>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="not found"
      />

      <button onClick={handleBack} >Back to Home</button>
    </div>
  );
};
