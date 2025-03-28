console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true


console.log("2" > 1); // true
console.log("02" > 1); // true (because converts into int)

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// the reason is that an quality check == and comparisons > < >= <= work differently.
// comparisons convert null to a number, treating it as 0. that's why (3) null>=0 is true and (1) null > 0 is false.

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

console.log("2" === 2); // false

const varID = Symbol("123")
const varID2 = Symbol("123")

console.log (varID == varID2) // false because symbol() is unique and immutable


