/*** Promise: Promise Create & Promise Consume ***/

/* Promise: Promise is an object representing the eventual completion or failure of an asynchronous operation.*/

// Promise Create
const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is completed.");
    resolve(); // connect resolve() with .then()
  }, 1000);
});

// promise consume by using .then() => resolve, .catch() => reject
promiseOne.then(function () {
  console.log("Promise consumed.");
});

// another way to create promise
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 completed.");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise resolved.");
});

// pass data in resolve()
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Sayan Ghosh", email: "sayan@email.com" }); // object pass to then using resolve
  }, 1000);
});

// accept data
promiseThree.then(function (user) {
  console.log(user); // get the object
});

// promise four
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    // let error = false
    if (!error) {
      resolve({ username: "Sayan", password: "123" });
    } else {
      reject("Error: Something went wrong!");
    }
  }, 1000);
});

// promiseFour.then((user)=>{
//   console.log(user) // {user:"Sayan", password:"123"}
// }).catch((error)=>{
//   console.log(error) // Error: Something went wrong!
// })

// Callback hell (nested callback functions)
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    // chaining (the previous value will return in new .then)
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected.");
  });

/*** Async Await ***/
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    // let error = false
    if (!error) {
      resolve({ topic: "Javascript", fees: "429rs" });
    } else {
      reject("Error: JS went wrong!");
    }
  }, 1000);
});

/* async await cannot directly handles errors, that's why we use try-catch */

async function consumedPromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumedPromiseFive();

