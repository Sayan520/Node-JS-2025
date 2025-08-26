/* if - else in JS */

const temperature = 60

if (temperature > 40) {
  console.log("temperature is under 50");
} else {
  console.log("temperature is greater than 50");
} 

console.log("temperature is executed");

// <, >, <=, >=, =, ==, !=, ===, !== (operators to check in condition) 
// == vs ===

// block scope 
const score = 90

if (score > 85) {
  const power = 'fly'
  console.log(`your power is ${power}`);
}

// console.log(`your power is ${power}`) // ReferenceError: power is not defined

// shorthand notation, implicit scope
const balance = 2000

if (balance > 1000) console.log("balance tested!");

// nested if-else
if (balance < 700) {
  console.log("less than 700");
} else if (balance < 900) {
  console.log("less than 900");
} else if (balance < 1500) {
  console.log("less than 1500");
} else {
  console.log("less than 2200");
}


// and (&&) , or (||)
const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard) {
  console.log("user is allow to pay");  
} else {
  console.log("user is not allowed to pay");
} 


const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in successfully.");
} else {
  console.log("user is not logged in!"); 
} 