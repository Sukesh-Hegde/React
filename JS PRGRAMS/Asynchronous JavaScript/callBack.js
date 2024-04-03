function greet(message) {
  setTimeout(() => {
    console.log("hii");
    message(newCall);
  }, 1000);
}

function message(newCall) {
  console.log("welcome to the session");
  newCall()
}
function newCall(){
    setTimeout(() => {
      console.log("new call called");
    }, 1000);
    
}
greet(message);