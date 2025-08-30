/* Reduce in JS */

const myArr = [1, 2, 3, 4, 5];

const initialValue = 0;

const sumWithInitial = myArr.reduce(function (accumulator, currentValue) {
  console.log(`acc: ${accumulator} & currVal: ${currentValue}`);
  return accumulator + currentValue;
}, initialValue);

console.log(sumWithInitial); // 15

// arrow function
const anotherSum = myArr.reduce((acc, currVal) => {
  return acc + currVal;
}, 0);

console.log(anotherSum); // 15

// array of object
const userData = [
  { id: 1, name: "Alice", age: 21 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 20 },
  { id: 4, name: "Diana", age: 30 },
];

const userAge = userData.reduce((arr, keys) => arr + keys.age, 0);
console.log(userAge); // 96


/* Reduce in JavaScript:
accumulator: First time this will take a initial value then it add with current values each time
current value: The value of the current element
initial value: A value to which accumulator is initialized the first time the callback is called. 
*/