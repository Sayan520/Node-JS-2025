// JS Tutorial : Data Types in JavaScript

"use strict" // treat all js code as newer version

// alert("notify") // we are using nodejs, not browser, so alert will not work here.

// DataTypes => Primitive & Non-primitive

let color = "Blue"; // String
let age = 25; //Number
let bignum = BigInt("123456789") // Bigint
let x = true; // Boolean
let y; // Undefined (don't use const for undefined declaration)

// Object => array object & user-defined object

const cars = ["Volvo", "BMW", "Hero"]; // Array Obj
const date = new Date("2025-02-26"); // Date Obj
let obj = {
  name : "Sayan",
  role : "Developer"
}

const newFunc = function(){
  console.log("Hello World.");
}

console.log(color)
console.log(date)

// Typeof operator to check the data type
console.log(typeof "Sayan") // String
console.log(typeof y) // Undefined
console.log(typeof undefined) // Undefined
console.log(typeof null) // Object
console.log(typeof(cars))

// Undefined vs null: undefined represents a variable that has been declared but not assigned, while null is an explicit assignment representing “no value”.

/* Data Types in JavaScript:
1. String - Represents text data, enclosed in quotes.
2. Number - Represents numeric values, both integers and floating-point.  
3. BigInt - Represents large integers, created by appending 'n' to the end of a number.
4. Boolean - Represents a logical entity, either true or false.
5. Undefined - Represents a variable that has been declared but not assigned a value.
6. Null - Represents an intentional absence of any object value.
7. Symbol - Represents a unique and immutable value, often used as object property keys.
8. Object - Represents a collection of properties, can be arrays, functions, or user-defined objects.
*/
