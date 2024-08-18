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

console.log();
console.log();
console.log();
