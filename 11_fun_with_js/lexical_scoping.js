/* Lexical Scoping in JavaScript */

function outer() {
  let username = "sayan";

  function inner() {
    console.log(`Inner User: ${username}`);
  }
  inner();
}

outer();

// console.log(`Outer User: ${username}`) // username is not defined

/*
In Lexical Scoping, when a function is defined inside another function,
the inner (child) function can access variables from the outer (parent) function.
Here, inner() can access username because it is defined in the outer scope.
However, the outer function cannot access variables defined inside the inner function.
Also, variables declared inside a function are not accessible outside that function.
*/

// Scenario:2
function outer() {
  let username = "sayan";
  // console.log(`Secret Key: ${secret}`) // secret is not defined

  function inner() {
    let secret = "user123"
    console.log(`Inner User: ${username}`);
  }

  function innerTwo() {
    console.log(`InnerTwo User: ${username}`);
    // console.log(`Secret Key: ${secret}`) // secret is not defined
  }

  inner();
  innerTwo()
}

// outer();

// console.log(`Outer User: ${username}`)

/*
Both inner() and innerTwo() can access username (defined in outer()).
They cannot access each other’s variables (e.g., secret is only available in inner()).
The outer function also cannot access variables defined inside its inner functions.
*/

/*****  
Inner functions can access variables from their parent (outer) scope,
but parent and sibling functions cannot access each other’s local variables.
*****/