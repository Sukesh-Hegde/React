
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

