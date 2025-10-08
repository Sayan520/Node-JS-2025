 // JavaScript is primarily a prototype-based language, not a object oriented programming language.

/*** Object Literal ***/
const user = {
  username: "Sayan Ghosh",
  loginCount: 52,
  signedIn: true,

  getUserDetails: function(){
    // console.log('user signed in.')
    // console.log(username) // username is not defined
    console.log(`Username: ${this.username}`) // `this` refers to the current context
    console.log(this) // `this` refers to the current object {} 
  }
}

console.log(user.username)
console.log(user["username"])
console.log(user.getUserDetails())

/* `this` in browser vs node env*/
console.log(this) // {} in node means, there is nothing in global context
// console.log(this) // Window{} in browser


/*** Constructor Function ***/

// const promiseOne = new Promise()
// const date = new Date()

// `new` is a constructor function which is used to create multiple instances from a single object literal. 
// `this` keyword refers to the specific instance of the object being created.

function User(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.userMessage = function(){
    console.log(`Welcome ${this.username}`)
  }

  // console.log(this) // current object with undefined params
  return this // optional, returned automatically when using 'new'
}

// Create instances of the User object
const User1 = new User("Sayan520", 12, true)
const User2 = new User("Swastik123", 23, false)
console.log(User1)
console.log(User1.constructor) // [Function: User]
console.log(User1 instanceof User) // true
console.log(User2)

/* Internal mechanism of how new Works (Step by Step):
 1. When new is used, a `new` empty object is created (called an instance).
 2. Because of `new` keyword a constructor function is called automatically, 
    and the `this` keyword inside it refers to that new object.
 3. All properties and methods defined using this are added to that `new` object.
 4. Finally, the object is returned automatically. & we get it in the function.
 */

