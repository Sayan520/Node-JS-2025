/****************************************** JS Tutorial: Functions ******************************************/

// functions : think like => code -- hold in a package -- reuse everywhere

function sayMyName() {
  console.log("S");
  console.log("A");
  console.log("Y");
  console.log("A");
  console.log("N");
} // function declaration/definition ({} => function scope)

sayMyName() /// function *reference* is 'sayMyName', '()' means *execution*

// add two numbers
function addTwoNum(number1, number2) {
  console.log(number1 + number2);
}

addTwoNum() // NaN (undefined + undefined)
addTwoNum(1, ) // NaN (1 + undefined)
addTwoNum(1, 2) // 3
addTwoNum(1, "2") // 12
addTwoNum(1, "a") // 1a (string concatenation)
addTwoNum(1, null) // 1 (null treated as 0)

// Parameter: inputs in function definition we call that inputs as parameter: function addTwoNum(number1, number2)
// Argument: values passes while calling: addTwoNum(1, 3)

const result = addTwoNum(2, 5) // 7
console.log("Result:", result); // undefined (because function does not *return* anything)

/* return keyword */
function addAnotherNum(number1, number2) {
  // return number1 + number2 // a simple way to return value
  let result = number1 + number2
  return result // when my function executes, return the value
  console.log("Hello JS"); // never executes (anything after return is ignored)
}

let returnResult = addAnotherNum(2, 5)
console.log("Result:", returnResult); // 7

/* Console VS Return: 
Use return to send a value back so that it can be stored or reused.
Use console.log() only to display something on screen. */

/* Example with Messages */
function showLoginMessage(username) {
  return `${username} just logged in.`
}

showLoginMessage("Sayan") // no output, because the function has executed and return the value but we did not store the value or print value to show the output

console.log(showLoginMessage("Sayan")); // Sayan just logged in.
console.log(showLoginMessage("")); // just logged in.
console.log(showLoginMessage()); // undefined just logged in.

/* If statement for handling invalid or missing arguments */
function showLoginMessage(username) {
  if (username === undefined) {
    console.log("please enter a valid username");   
  }
  return `${username} just logged in.`
}

console.log(showLoginMessage()); // please enter a valid username...undefined just logged in.

/* now if i want to don't print the 'undefined just logged in.' just use return keyword after if condition so that
it never go to next line */

function showLoginMessage(username) {
  if (username === undefined) {
    console.log("please enter a valid username");
    return;  // stops execution, avoids returning below line
  }
  return `${username} just logged in.`
}

console.log(showLoginMessage());

// function showLoginMessage(username) {
//   if (!username) { // username is undefined
//     console.log("please enter a valid username");
//     return  
//   }
//   return `${username} just logged in.`
// }

// console.log(showLoginMessage());

/* now if i want to pass default value then we can pass value in parameter so when we call the function without any
argument it will print the default value */

/* Default Parameters */
function showLoginMessage(username = "Bittu") {
  if (username === undefined) {
    console.log("please enter a valid username");
    return   // it will never go inside this if-block because the value never be undefined, it will be atleast Bittu
  }
  return `${username} just logged in.`
}

console.log(showLoginMessage()); // Bittu just logged in.
console.log(showLoginMessage("Sayan")); // Sayan just logged in.

/***** SUMMARY *****/
/* Function: Definition	Wraps reusable code
Parameters: Placeholders for input values
Arguments: Actual values passed to a function
console.log(): Displays output only
return:	Sends output back to caller (so it can be stored/used)
Default Parameters: Provide fallback values when no arguments are supplied
Early return:	Stops function execution to handle invalid values gracefully */