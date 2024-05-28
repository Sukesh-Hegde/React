import { useEffect, useState } from "react";

export default function Reset(){

    const [email,setEmail] = useState("");

    //to get the email which is stored in the local storage
    useEffect(()=>{
      let savedEmail = localStorage.getItem("email");

      if (savedEmail) {
        setEmail(savedEmail);
      }
    },[])

    //for email to be present when going back from Reset--> login page
    useEffect(() => { 
      localStorage.setItem("email", email);
    },[email])
    
    return(
        <>
        <h3>Reset Password for</h3>
      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          // Logic to send a new password follows
        }}
      >
        Submit
      </button>      
      <br />
        </>
    )
}