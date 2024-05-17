increment = true;
decrement = false;
count = 1;

function strtCount() {
  const timerDisplay = document.getElementById("count");
  const btn = document.getElementById("btn");

  if (increment) {
    Interval = setInterval(() => {
      timerDisplay.innerHTML = "";
      timerDisplay.innerText = count;
      count++;
      if (count > 10) {
        clearInterval(Interval);
        decrement = true;
        increment = false;
        btn.innerText="decrement"
      }
    }, 500);
  }
  if (decrement) {
    count = 10;
    Interval = setInterval(() => {
      timerDisplay.innerHTML = "";
      timerDisplay.innerText = count;
      count--;
      if ((count == -1)) {
        clearInterval(Interval);
        timerDisplay.innerText = 0;
        decrement = false;
        increment = true;
        btn.innerText = "increment";

      }
    }, 500);
  }
}

document.getElementById("btn").addEventListener("click", strtCount);
