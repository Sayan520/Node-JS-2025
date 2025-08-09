/* JS Tutorial : Data Types in JavaScript */

// JavaScript is a dynamically typed language. because we can change the type of variable at any time. plus when we declare a variable in JavaScript, we do not need to specify its data type (e.g., int, string). The JavaScript engine infers the type based on the value assigned to it. 

// how they are stored in memory and how they are accessed, based on their types there are two main categories of data types in JavaScript:
// 1. Primitive Data Types / Call by Value (7 types)
// String, Number, Boolean, null, undefined, BigInt, Symbol

const score = 100 // In JS, we never define the type of variable explicitly.
// const age: number = 40 // This is a example of TypeScript for defining type explicitly.

const outsideTemp = null //empty value
let userMail; // undefined, not initialized
let isLoggedIn = true; // boolean value
let userName = "Sayan"; // string value
let userAge = 25; // number value
let userBalance = 100.50; // number value with decimal
let bigNumber = 1234567890123456789012345678901234567890n; // BigInt value
let uniqueSymbol = Symbol("unique"); // Symbol value

let userId = Symbol('101')
let Id = Symbol('101')
console.log(userId === Id); // false, because each Symbol is unique, store value same but return value different

// 2. Non-Primitive Data Types / Call by Reference
// Array, Objects, Functions

const superHeroes = ["Superman", "Spiderman", "Ironman"] // Array of strings

const user = { 
  name: "Sayan",
  age: 25,
  isLoggedIn: true,
  balance: 100.50,
  hobbies: ["reading", "gaming", "coding"]
} // Object with key-value pairs

const myFunction = function(){
  console.log("Hello Javascript!");
} //function object

// type checking in JavaScript
console.log(typeof outsideTemp); // object (null is considered an object in JS)
console.log(typeof myFunction); // object Function (functions are also objects in JS)



