/* Prototype */

const superHeros = ["superman", "spiderman", "ironman"]

const superPowers = {
  superman: "invincibility",
  spiderman: "spider-sense",
  ironman: "armor",

  getSpiderPower: function(){
    console.log(`Spiderman has ${this.spiderman}`)
  }
};

// inject a method for Object prototype
Object.prototype.getPower = function(){
  console.log(`Try to discover your power.`)
}

/* 
When we create a method on Object.prototype, 
it becomes accessible to all objects in JavaScript —
including arrays, strings, functions, and other objects — 
because every object ultimately inherits from Object.prototype.
*/

superPowers.getPower()
superHeros.getPower()

// both work, because arrays (superHeros) and objects (superPowers) both inherit from Object.prototype.

// inject a method for Array prototype
Array.prototype.GetPower = function(){
  console.log(`Please discover your power`)
}

// If we create a method on Array.prototype, it is accessible only to arrays, not to plain objects or other types.

superHeros.GetPower()
// superPowers.GetPower() // error, it is an object and does not inherit from Array.prototype.


/* Prototypal Inheritance */

const User = {
  name: "Sayan",
  email: "sayan@google.com"
}

const Teacher = {
  makeVideo: true
}

const TeachingSupport = {
  isAvailable: false
}

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport // can inherits all property of TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

/* Task: Create a method to remove space and count length in string */

const myName = "Sayan  "

// inject method in String prototype
String.prototype.trueLength = function(){
  console.log(`Current reference: ${this}`)
  console.log(`The length of the string is: ${this.trim().length}`)
}

myName.trueLength()
"Swastik".trueLength()
"Bittu".trueLength()