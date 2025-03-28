"use strict" // treat all js code as newer version

// alert("notify") // pop up in browser 

// DataTypes => Primitive & Non-primitive

let color = "Blue"; // String
let age = 25; //Number
let bignum = BigInt("123456789") // Bigint
let x = true; // Boolean
let y; // Undefined

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
console.log(typeof y) // Undefined
console.log(typeof null) // Object
console.log(typeof(cars))
console.log(date)

// undefined represents a variable that has been declared but not assigned, while null is an explicit assignment representing “no value”.

