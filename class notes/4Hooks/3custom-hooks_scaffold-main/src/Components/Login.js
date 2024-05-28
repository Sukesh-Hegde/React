import { useEffect } from "react";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //for email to be present after comming back from Reset--> login page
  useEffect(() => {
    let savedEmail = localStorage.getItem("email");

    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  //storing email in the local storage
  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  return (
    <>
      <h1>Login to the Portal!</h1>
      <h3>Login</h3>
      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        placeholder="Enter Password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          console.log("Form submitted");
        }}
      >
        Submit
      </button>
      <br />
    </>
  );
}
