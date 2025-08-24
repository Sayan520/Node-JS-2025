// Javascript executional context

let val1 = 10
let val2 = 5

function addNum(num1, num2) {
	let result = num1 + num2
	return result
}

const result1 = addNum(val1, val2)
const result2 = addNum(10, 19)

console.log(result1); 
console.log(result2); 

/* Call Stack: try in browser >> Sources >> Snippets >> test.js */
function one() {
  console.log("one");
  two()
}

function two() {
  console.log("two");
  three()
}

function three() {
  console.log("three");
}

one()
two()
three()