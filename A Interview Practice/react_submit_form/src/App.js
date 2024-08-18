import "./App.css";
import react, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [number, setNumber] = useState("");

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const validateContactNumber = (contactNumber) => {
    const contactNumberPattern = /^[0-9]{10}$/;
    return contactNumberPattern.test(contactNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (name.trim() === "") {
      alert("name is required");
      isValid = false;
      return;
    }

    if (!validateEmail(email)) {
      alert("emailis not valid");
      return;
    }

    if (!validateContactNumber(number)) {
      alert("number not valid");
      return;
    }

    if (isValid) {
      alert("login successfully");
    }
  };

  return (
    <form className="App" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="name">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="name">Number:</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <button style={{ display: "block", width: "20%", margin: "auto" }}>
        Submit
      </button>
    </form>
  );
}

export default App;
