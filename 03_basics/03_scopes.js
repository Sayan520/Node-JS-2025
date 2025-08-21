/***************************** JS Tutorial: Global & Block scope *****************************/

{} // Represents a block (can be from if, loop, or function)

/* Example with var, let, and const */

var c = 300 // it will not print in console.log() because var is function scoped, not block-scoped

if (true) {
  const a = 10; // block-scoped
  let b = 20; // block-scoped
  console.log(b); //20
  var c = 30; // c = 30 (overrides outer `c`)
} 
// block scope: means a,b,c should not be accessed outside the scope {}

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined

console.log(c); // 30, because `var` is NOT block-scoped

/* global scope vs block scope: 
global scope can be accessed within any scope,
but block scope is limited within the scope like in if-else, function, loops
it should not be accessed from outside the scope 

let and const are block-scoped (safe).
var is function-scoped and leaks outside blocks (unsafe).
*/

/* ------------------------------ */

let b = 200 // it can be accessed from anywhere(outer variable)

if (true) {
  const a = 10;
  let b = 20;
  console.log("Inner:", b); // 20, it can be accessed within this scope
  var c = 30; 
}

console.log("Outer:", b); // 200

/*  Simple rule to remember:
Use let and const → safer, block-scoped.
Avoid var → it is a function scoped because it leaks outside blocks and can cause bugs. */

/* ------------------------------------------- */

/* Closure (Nested Functions) */

function one() {
  const username = "Sayan"

  function two() {
    const age = 24
    console.log(username); // child can access parent scope
  }
  // console.log(age); // ReferenceError: age is not defined
  two()
}

one() // Sayan 

/* Closures:
A child function can access variables of its parent.
Parent cannot access child’s variables.
so, when nested function creates, the child function can access property in parent function.

if two() is not called then the one() should not be show the output 
*/

// example-2
if (true) {
  const firstName = "Sayan"

  if(firstName === "Sayan") {
    const lastName = " Ghosh"
    console.log(`my full name is ${firstName}${lastName}`);  
  }

  // console.log(lastName); // ReferenceError: lastName is not defined (can't access outside the scope)
}
// console.log(firstName); // ReferenceError: firstName is not defined
 
// +++++++++++++++++++++++ interesting ++++++++++++++++++++++++++ //

/* Function Hoisting */

//Function Declaration (hoisted)
addOne(5) // this will execute the value

function addOne(num) {
  return num + 1
}

// addTwo(5) // ReferenceError: Cannot access 'addTwo' before initialization

// Function Expression (not hoisted)
const addTwo = function(num) {
  return num + 2
}

/* Function declarations vs Function expressions : 
we can't access before function declare and hold that in a variable,
but in a normal function declaration we can access easily and execute 

so, Function declarations are hoisted → we can call them before definition.
Function expressions (assigned to variables) are not hoisted.
*/