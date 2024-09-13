let Hour = document.getElementById("hr");
let Min = document.getElementById("min");
let Sec = document.getElementById("sec");
let ntn = document.getElementById("ntn");

function init() {
  let data = new Date();

  hour = data.getHours();
  min = data.getMinutes();
  sec = data.getSeconds();

  Hour.innerHTML = data.getHours();
  Min.innerHTML = data.getMinutes();
  Sec.innerHTML = data.getSeconds();

  if (hour > 12) {
    Hour.innerHTML = hour - 12;
    ntn.innerHTML = "&nbsp;PM";
  } else {
    ntn.innerHTML = "&nbsp;AM";
  }

  requestAnimationFrame(init);
}
requestAnimationFrame(init);








// import React, { useEffect, useState } from "react";
// import "./App.css";

// const getTimeString = () => {
//   const hours = new Date().getHours();
//   console.log(hours);
//   if (hours >= 5 && hours < 12) {
//     return "Good Morning";
//   } else if (hours >= 12 && hours < 17) {
//     return "good afternoon";
//   } else {
//     return "Good Night";
//   }
// };

// export default function App() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => setTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="App">
//       <h1>{getTimeString()}</h1>
//       <h2>{time.toLocaleTimeString()}</h2>
//     </div>
//   );
// }
