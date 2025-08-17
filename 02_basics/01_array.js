/* JS Tutorial : Arrays */

let myArray = [2, 4, 6, 8]

console.log(myArray); 
console.log(myArray[0]); // Accessing the first element 
console.log(myArray[1]); // Accessing the second element
console.log(myArray[99]); // Accessing an index that does not exist, Output: undefined

// shallow copy => is a copy of an array that shares the same references to the objects in the original array
// deep copy => is a copy of an array that creates new references to the objects in the original array

// another way to create an array
let myArray2 = new Array(1, 2, 3, 4); // try this in the console
console.log(myArray2);
console.log(typeof myArray2); // Output: object
console.log(myArray.length); // Output: 4

// Array methods

let myArray3 = [2, 4, 6, 8]
myArray.push(10); // Adds an element to the end of the array
console.log(myArray3); // Output: [2, 4, 6, 8, 10]
myArray.pop(); // Removes the last element from the array
console.log(myArray3); // Output: [2, 4, 6, 8]

myArray3.unshift(0); // Adds an element to the beginning of the array starting from index 0
console.log(myArray3); // Output: [0, 2, 4, 6, 8]
myArray3.shift(); // Removes the first element from the array 
console.log(myArray3); // Output: [2, 4, 6, 8]

// unshift vs push => unshift adds an element to the beginning, push adds to the end.
// shift vs pop => shift removes the first element, pop removes the last element.

console.log(myArray3.includes(9)); // Checks if the array includes the value 9, Output: false
console.log(myArray3.indexOf(99)); // Returns the index of the value 99, Output: -1 (not found)
console.log(myArray3.indexOf(6)); // Returns the position of the value 6 // Output: 2

//  includes() - checks if an array contains a specific value and returns true or false.
//  indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present.
// join() - joins all elements of an array into a string, separated by commas by default.

const newArr = myArray3.join()
console.log(myArray3); // Output: [2, 4, 6, 8]
console.log(newArr); // Output: "2,4,6,8" (string representation of the array)
console.log(typeof newArr); // Output: string

// slice vs splice

let arr = [1, 2, 3, 4, 5];
console.log("Original Array:", arr);

let myN1 = arr.slice(1, 3); // Creates a new array with elements from index 1 to 2 (not including index 3)
console.log("Slice Result:", myN1); // Output: [2, 3]

console.log("Original Array after slice:", arr); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)

let myN2 = arr.splice(1, 2); // Removes 2 elements starting from index 1
console.log("Original Array after splice:", arr); // Output: [1, 4, 5] (original array is modified)
console.log("Splice Result:", myN2); // Output: [2, 3] (removed elements)

// slice() - returns a shallow copy of a portion of an array into a new array object
// splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// slice vs splice => slice does not modify the original array, while splice modifies it.