const request = new Promise((resolve, reject) => {
  setTimeout(() => {
    //console.log('Promise initiated');
    resolve({ firstName: 'Falak', lastName: 'Chandni' });
    //reject('Request has been rejected!!');
  }, 1000);
});

request
  .then((value) => {
    console.log(value);
  })
  .catch((err) => console.log(err))
  .finally(() => console.log('request completed'));

console.log(request);

//////////////////////////////////////////////////////////////////////////////////////////////////
//another example

function getUserData(userId){
    return new Promise((resolve,reject) => {
    //simulate fetching user data from the server
    setTimeout(() => {
        if (userId === 123){
            resolve({id: 123, name:'John Doe', age: 30});
        }else{
            reject('User not found');
        }
    },1000);
    });
}

function DisplayUserData(userId){
    getUserData(userId)
        .then((userData) => {
            console.log('User data:', userData.name);
        })
        .catch((error) => {
            console.error('Error',error);
        })
}

DisplayUserData(123);

//////////////////////////////////////////////////////////////////////////////////////////////////
//example for Promise.all
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1),1000))
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 500));

Promise.all([promise1, promise2])
.then((results) => console.log(results));


    // When using Promise.all() method it returns promise fulfills when all of the input's promises are fulfilled 
    // (including when an empty iterable is passed), with an array of the fulfillment values. So even if 
    // promise 2 is fulfilled before then, also it will wait for promise 1 to be fulfilled and will then 
    // execute the .then() method.


//////////////////////////////////////////////////////////////////////////////////////////////////
//example of Promise.race()
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise3, promise4]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// Expected output: "two"

  {/* The Promise.race() method is used to race multiple Promises and return a new
  Promise that settles with the result of the first Promise (either resolved or
  rejected) that completes among the provided Promises.{" "} */}

