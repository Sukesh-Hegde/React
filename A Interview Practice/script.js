
// async function fetchData(){
//     let result = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await result.json();
//     console.log(data);
//     display(data)
// }

// function display(data){
//     const container = document.getElementById('box');
//     container.innerHTML='';

//     let userDetails = document.createElement('div');
//     userDetails.classList='user';

//     data.forEach(element => {
//         let userDetails = document.createElement("div");
//         userDetails.classList = "user";

//         userDetails.innerHTML = `
//         <h2>${element.name}</h2>
//         <p>${element.email}</p>
//         <p>Name ${element.company.name}</p>
//         `;
//         container.appendChild(userDetails);
        
//     });
// }

// fetchData();

// var type = typeof('5'-3);
// console.log(type);

// =====================================================================

// const http = require('http');

// const server = http.createServer();

// const port = 3000;

// server.listen(port, () => {
//     console.log(`server is running on port ${port}`);
// })

// =====================================================================

// const obj ={ 
//     "1" : "a",
//     1 : "b",
//     [1]: "c"
// };

// console.log(obj["1"]); // c

// var a = 75;
// function fun() {
//   b = 16;
//   console.log(a);
//   var a = 12;
// }

// function fun1() {
//   console.log(b);
// }

// fun(); //undefined
// fun1(); //16


// var def = function d(){
//     console.log("Hai");
// }
// console.log(def);


// console.log("def", def);
// const def = function c(){
//     console.log("hii")
// };
// console.log("def1", def);
// console.log("def2", def());


// function example() {
//   {
//     var b = 11;
//   }
//   console.log(b); 
// }

// example(); //11