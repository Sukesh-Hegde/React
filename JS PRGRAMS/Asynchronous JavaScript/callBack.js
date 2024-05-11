// function greet(message) {
//   setTimeout(() => {
//     console.log("hii");
//     message(newCall);
//   }, 1000);
// }

// function message(newCall) {
//   console.log("welcome to the session");
//   newCall()
// }
// function newCall(){
//     setTimeout(() => {
//       console.log("new call called");
//     }, 1000);
    
// }
// greet(message);


// Function that takes a callback
function fetchData(callback) {
    // Simulate fetching data asynchronously
    setTimeout(function() {
        // Simulated data
        const data = { name: 'John', age: 30 };
        // Call the callback function with the data
        callback(data);
    }, 1000); 
}

// Callback function to be executed after data is fetched
function processData(data) {
    console.log('Received data:', data);
    console.log('Processed data:', { ...data, isAdmin: false }); // Adding isAdmin property
}

// Call fetchData and pass processData as a callback
fetchData(processData);
