/* Truthy-Falsy in JS */

const userEmail = ""

if (userEmail) {
  console.log("user has valid email");
} else {
  console.log("user don't have email");
}

/* truthy value:
"0", 'false',true, " ", [], {}, function(){}

falsy value:
false, 0, -0, BigInt (0n), "", null, undefined, NaN
*/

// check if array data is empty
const userArray = []

if (userArray.length === 0) {
  console.log("Array is empty");
}

// check if object has any key-value
const userObj = {}

if (Object.keys(userObj).length === 0) {
  console.log("Object is empty");
}

// interview questions
console.log(false == 0) // true
console.log(false == '') // true
console.log(0 == '') // true


/* Nullish coalescing operator (??): null or undefined */

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20

console.log(val1)

/* Nullish coalescing operator is using for handle errors, 
so we assign values to prevent errors like, null and undefined */

/* Ternary Operator */
// syntax => condition ? true : false 

const teaPrice = 100

teaPrice >= 80 ? console.log("more than 80") : console.log("less than 80") // more than 80
