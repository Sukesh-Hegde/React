import { useState, useEffect } from "react";

export default function useLocalStorage() {
  const [email, setEmail] = useState("");

  //to get the email which is stored in the local storage
  useEffect(() => {
    let savedEmail = localStorage.getItem("email");

    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  //for email to be present when going back from Reset--> login page
  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  return { email, setEmail };
}
