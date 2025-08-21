/*************** JS Tutorial: This & Arrow function in JavaScript ***************/

/* this in Objects (Method) */
let user = {
  name: "Sayan",
  age: 24,

  welcomeMessage: function() {
    console.log(`Hi ${this.name}, Welcome to the JS Tutorial!`); // `this` refers to the current context
    console.log(this); // print every time for each context
  }
}

user.welcomeMessage() // Hi Sayan, Welcome to the JS Tutorial!
user.name = "Sam" 
// now it will print the current context message based on the name value 
user.welcomeMessage() // Hi Sam, Welcome to the JS Tutorial!


/* Browser vs Node.js Difference */
console.log(this); // {}

// if we try this in browser console
console.log(this); // Window{}

/* In a normal function:
Non-strict mode → this refers to the global object (window in browsers, global in Node).
Strict mode → this is undefined. */

function test(){
  console.log(this); // <ref *1> Object [global] {...}
}

test()

// `this` is not work within function, it only work with objects.

// example-2
function test2(){
  const username = "Sayan"
  console.log(this.username); 
}

test2() // undefined


// example-3
const test3 = function() {
  const username = "Sayan"
  console.log(this) 
}

test3() // undefined

/* Arrow Functions */
const test4 = () => {
  // const username = "Sayan"
  console.log(this) 
}

test4() // {}

/* normal function vs arrow function */

// arrow function 
// () => {} 


/* this in Return Statements */
// explicit return
const addTwo = (num1, num2) => {
  return num1 + num2
}

console.log(addTwo(5, 7)); // 12

// implicit return 
const addTwoo = (num1, num2) => (num1 + num2)

console.log(addTwoo(5, 7)); // 12

/* if we use {} then we must have to use return keyword 
but if we use () then we don't have to use return 
this technique is used rarely in React
*/

// returning objects
const obj = (user) => ({username: "Sayan"})
console.log(obj("Sayan")); // { username: 'Sayan' }


/* this 
this in object method → the object itself
this in normal function → window (non-strict) / undefined (strict)
this in arrow function → inherits from parent scope (no own this)
this in browser vs Node.js → window vs {}
*/






