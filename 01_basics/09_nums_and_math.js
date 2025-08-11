/************* JS Tutorial : Numbers Object *************/

// automatically converts to number
const marks = 50
console.log(marks); // 50

// manually define a number object
const number = new Number(50)
console.log(number); // [Number: 50]
console.log(typeof number)

// convert number to string, after converted into string we can use string methods
const newData = number.toString()
console.log(newData)// 2
console.log(typeof newData); // string

const newScore = 500
console.log(newScore.toFixed(2)); // 500.00

// toPrecision() method formats a number to a specified length
let num1 = 123.456789;
console.log(num1.toPrecision(5)); // Output: "123.46" (rounded to 5 significant digits)

let num2 = 0.00012345;
console.log(num2.toPrecision(3)); // Output: "0.000123" (rounded to 3 significant digits)

let num3 = 123456789;
console.log(num3.toPrecision(4)); // Output: "1.235e+8" (scientific notation for precision)

let num4 = 5;
console.log(num4.toPrecision(3)); // Output: "5.00" (adds trailing zeros for precision)

let num5 = 123.45;
console.log(num5.toPrecision()); // Output: "123.45" (no precision specified, similar to toString())

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // Output: "1,00,000" (formatted for Indian locale)

// try in console
// Number.MAX_VALUE => 1.7976931348623157e+308
// Number.MIN_VALUE => 5e-324


/************* JS Tutorial : Math Object *************/

console.log(Math) // Math { ... } (built-in Math object with properties and methods)
console.log(Math.abs(-5)) // 5 (absolute value),to change negative to positive value, not vice versa
console.log(Math.round(4.7)) // 5 (rounds to nearest value)
console.log(Math.ceil(4.1)) // 5 (choose highest value)
console.log(Math.floor(4.9)) // 4 (choose lowest value)
console.log(Math.max(1, 2, 3, 4, 5)) // 5 (maximum value)
console.log(Math.min(1, 2, 3, 4, 5)) // 1 (minimum value)

console.log(Math.random()) // Random number between 0 and 1, changes every time when run it
console.log(Math.random() * 10) // multiplying by 10 give shift the value to left, so it gives a random number between 0 and 10
console.log((Math.random() * 10) + 1) // to avoid 0 in second index value, add 1 so it gives a random number minimum 1 not 0
console.log((Math.floor(Math.random() * 10) + 1)) // use floor() to get lowest rounded value 
console.log(Math.sqrt(16)) // 4 (square root)

// To get value between 10 and 20

const min = 10;
const max = 20;

const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomValue); // Random integer between 10 and 20

/* Step-by-step explanation:
1. max - min + 1: This calculates the range of numbers (in this case, 11) and +1 to avoid 0.
2. Math.random() * (max - min + 1): This generates a random number between 0 and the range (0 to 10).
3. Math.floor(...): This rounds down the random number to the nearest integer, e.g., 0 to 10.
4. + min: This shifts the range to start from the minimum value (10 in this case).
The final result is a random integer between 10 and 20, inclusive.
 */


