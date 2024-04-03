const buttonElement = document.querySelector(".button");
const textElement = document.querySelector(".text");

//SetTimeout
buttonElement.addEventListener("click", () => {
  textElement.textContent = "Button clicked";
  setTimeout(() => {
    textElement.textContent = "";
  }, 2000);
});

// setInterval

let seconds = 0;
const setTextElement = document.querySelector("#setText");
setTextElement.textContent = `${seconds}`;


const timer = setInterval(()=>{
    seconds++;
    setTextElement.textContent = `${seconds}`;

    if(seconds>=5){
        clearInterval(timer)
    }
},1000)

