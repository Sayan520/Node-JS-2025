// JS Tutorial : Stack and Heap Memory

// Stack memory => Primitive data types, it will take value as copy so when we change the value of a variable it will not affect the original value.
// Heap memory => Non-primitive data types, it will take value as reference so when we change the value of a variable it will affect the original value.

// Stack memory example
let a = 10; // Primitive type stored in Stack memory
let b = a; // A copy of the value is created in the Stack.
b = 20 // new value assigned to b
console.log(a); // Output: 10, original value remains unchanged
console.log(b); // Output: 20, b is changed


let user = {
  name: "Sayan",
  age: 25
} 

// Heap memory example
let user2 = user; // Copying reference of user to user2
user2.age = 30; // Changing age in user2
console.log(user.age); // Output: 30, original value is affected
console.log(user2.age); // Output: 30, user2 reflects the change

let arr = [1, 2, 3]; // Heap memory
let arr2 = arr; // Copying reference of arr to arr2
arr2.push(4); // Modifying arr2
console.log(arr); // Output: [1, 2, 3, 4],
console.log(arr2); // Output: [1, 2, 3, 4], both reflect the change

