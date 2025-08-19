/****************************************** JS Tutorial : Objects part 2 ******************************************/

const newObject = new Object() // singleton object
const newObject2 = {} // non-singleton object

console.log(newObject); // {}
console.log(newObject2); // {}


newObject2.firstName = "Sayan"
newObject2.lastName = "Ghosh"
newObject2.age = 24

console.log(newObject2); // { firstName: 'Sayan', lastName: 'Ghosh', age: 24 }
 
const newUser = {
  name: {
    fullName: {
      firstName: "Sayan",
      lastName: "Ghosh"
    }
  }
}

console.log(newUser.name.fullName.firstName); // access nested value in objects within objects (e.g. Sayan)

// optional chaining
// console.log(newUser.name.fullName?.firstName); // using ? for protection so if fullName does not exist it will move to the next value.

// merge objects

const num1 = {0: "a", 1:"b"}
const num2 = {2: "c", 3:"d"}

const num3 = {num1, num2} // problematic situation 
console.log(num3); // { num1: { '0': 'a', '1': 'b' }, num2: { '2': 'c', '3': 'd' } }

const num4 = Object.assign(num1, num2) // actual syntax for merge object

// const num4 = Object.assign({}, num1, num2) // also can use {} is a optional parameter but by using this is guaranteed all objects will combined and produced output as objects {}
// by using {} in first declare as target and next all objects is declare as source

console.log(num4); // { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }

console.log(num1 == num4); // output: true, because of the concept of heap

const num5 = {...num1, ...num2} // spread operator to merge objects
console.log(num5); // { '0': 'a', '1': 'b', '2': 'c', '3': 'd' } 


// suppose some data are coming from database

const usersData = [
  {
    id: 1,
    name: "Sayan Ghosh"
  },
  {
    id: 2,
    name: "Anupam Bera"
  },
  {
    id: 3,
    name: "Sourav Bera"
  }
] // array of objects

console.log(usersData[0].name); // Sayan Ghosh

// *** important methods *** //

console.log(newObject2); // { firstName: 'Sayan', lastName: 'Ghosh', age: 24 }

console.log(Object.keys(newObject2)); // returns datatype: array[], output: [ 'firstName', 'lastName', 'age' ]
console.log(Object.values(newObject2)); // [ 'Sayan', 'Ghosh', 24 ]
console.log(Object.entries(newObject2)); // [ [ 'firstName', 'Sayan' ], [ 'lastName', 'Ghosh' ], [ 'age', 24 ] ]

console.log(newObject2.hasOwnProperty('isLoggedIn')); // false
console.log(newObject2.hasOwnProperty('age')); // true


/* if you want to learn object methods in-depth go to console and check there! */





