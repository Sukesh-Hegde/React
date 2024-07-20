import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLoClick = (event) => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

    const clear = () => {
      setText("");
    };

   const handleLoCopy = () =>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
   }

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
          <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>
            Conver to uppercase
          </button>
          <button className="btn btn-primary " onClick={handleLoClick}>
            Conver to lowercase
          </button>
          <button
            type="submit"
            onClick={speak}
            className="btn btn-warning mx-2 my-2"
          >
            Speak
          </button>
          <button
            type="submit"
            onClick={clear}
            className="btn btn btn-danger mx-2 my-2"
          >
            Clear
          </button>

          <button className="btn btn-primary " onClick={handleLoCopy}>
            Copy
          </button>
        </div>
      </div>
      <div className="container my-2">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.08 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
