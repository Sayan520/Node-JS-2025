// // JS Tutorial : Strings in JavaScript

const name = "Sayan"
const age = 24

console.log("my name is", name + " and my age is", age+ "years"); // outdated way of concatenation
console.log(`my name is ${name} and my age is ${age} years`); // modern way using string interpolation

// another way of declare string
const firstName = new String("Sayan")

console.log(firstName); // [String: 'Sayan']

/* If i print this(firstName) on console, it will print(object key-value pairs):
String {'Sayan'} 
0: "S"
1: "a"
2: "y"
3: "a"
4: "n"
length: 5
[[Prototype]]: String
[[PrimitiveValue]]: "Sayan"
*/ 

console.log(firstName[0]) // key access => S
console.log(firstName.__proto__); // {}
console.log(firstName.length); // 5
console.log(firstName.charAt(2)); // y
console.log(firstName.indexOf('n')); // 4

const newName = "Swastik"
console.log(newName.substring(0, 6)); // Swasti

console.log(newName.slice(-6, 2)); // w

// substring vs slice : slice can take negative indices, substring cannot. e.g. newName.slice(-6, 2) will return 'w' while newName.substring(-6, 2) will return 'Sw' because it treats negative indices as 0.

const anotherName = "   Bittu   "
console.log(anotherName.trim()); // Bittu with leading and trailing spaces removed

console.log(newName.replace('S', 'R')); // swastik - replaces first occurrence of 'S' with 'R'

console.log(anotherName.includes("Bittu")); // true

const fullName = "Sayan-Ghosh"
console.log(fullName.split("-")); // [ 'Sayan', 'Ghosh' ]

