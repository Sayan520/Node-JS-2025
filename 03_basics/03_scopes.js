/***************************** JS Tutorial: Global & Block scope *****************************/

{} // scope (scope of that program like function-scope, if-else-scope)

var c = 300 // it will not print in console because var is function scoped

if (true) {
  const a = 10;
  let b = 20;
  console.log(b); //20
  var c = 30; // c = 30
} // block scope, means a,b,c should not reach outside the scope {}

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
console.log(c); // 30, var ignores block scope, not because it's block-scoped.

/* global scope vs block scope: global scope can be accessed within any scope,
but block scope is limited within the scope like in if-else, function, 
it should not be accessed from outside the scope */

/*------------------------------*/

let b = 200 // it can be accessed from anywhere

if (true) {
  const a = 10;
  let b = 20;
  console.log("Inner:", b); // 20, it can be accessed within this scope
  var c = 30; 
}

console.log("Outer:", b); // 200

/*  Simple rule to remember:
Use let and const → safer, block-scoped.
Avoid var → because it leaks outside blocks and can cause bugs. */