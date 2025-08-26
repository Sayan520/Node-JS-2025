// JS Tutorial : Comparison Operators

// easy case
console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true

// complex case
console.log("2" > 1); // true
console.log("02" > 1); // true (because converts into int)

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

/*
In JS, quality check(==) and comparison(< >= <=) operators works differently.
reason is comparisons convert null to a number, treating it as 0,
that's why (3) null>=0 is true and (1) null > 0 is false.
*/

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// strict check (===) checks both value and type
console.log("2" === 2); // false
console.log("2" == 2); // true because it does not check the type

// = assignment operator
// == comparison operator

const varID = Symbol("123")
const varID2 = Symbol("123")

console.log (varID == varID2) // false because symbol() is unique and immutable


