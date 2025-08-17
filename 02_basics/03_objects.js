/* JS Tutorial - Objects */

// Singleton object : if we create object using constructor then it will be one single object
// Object.create()

// Object literal : can be use as multiple instances

// Symbols declaration
const DevID = Symbol("devID");

const users = {
  name: "Sayan Ghosh",
  age: 24,
  isLoggedIn: true,
  lastLoggedIn: ["Friday", "Wednusday"],
  address: {
    city: "Kolkata",
    state: "West Bengal", 
    country: "India"
  },
  [DevID]: "dev12345" // use symbol as []
}

console.log(users.name); // Sayan Ghosh
console.log(users["name"]); // Sayan Ghosh
console.log(typeof users); // object
console.log(users[DevID]);

// change age
users.age = 25
// Object.freeze(users) // prevents the modifications for values
users.age = 26
console.log(users.age); // 25

users.greetings = function() {
  console.log("Hello World!");
  
}

users.greeting = function() {
  console.log(`Hello ${this.name}`); // this => same object reference

}

console.log(users.greetings); // [Function (anonymous)]
console.log(users.greetings()); // Hello World!
console.log(users.greeting()); // Hello Sayan Ghosh
