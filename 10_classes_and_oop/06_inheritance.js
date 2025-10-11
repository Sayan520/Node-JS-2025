/* Inheritance in JavaScript */

class Parent {
  constructor(username){
    this.username = username
  }

  callUser(){
    console.log(`my username is ${this.username}`)
  }
}

class Child extends Parent { // extends: child inherits from parent
  constructor(username, email, password){
    super(username) // automatically access property from parent class
    this.email = email
    this.password = password
  }

  addCourse(){
    console.log(`a new course is added by ${this.username}`)
  }
}

const userOne = new Child("sayan", "sayan@js.com", "sayan123")
userOne.addCourse()
userOne.callUser()


const userTwo = new Parent("bittu")
userTwo.callUser()
// console.log(userTwo.addCourse()) // TypeError

console.log(userOne === userTwo) // false
console.log(Parent === Child) // false
console.log(userOne instanceof Child) // true
console.log(userOne instanceof Parent) // true
