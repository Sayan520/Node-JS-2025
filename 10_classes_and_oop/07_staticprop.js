/* Static Property in JavaScript */

class User {
  constructor(username){
    this.username = username
  }

  logUser(){
    console.log(`Username: ${this.username}`)
  }

  static createId(){ // prevents that method/property from being accessed
    return `123`
  }
}

const userOne = new User("Sayan")
// console.log(userOne.createId()) // TypeError because of static keyword

// if use inheritance still cannot access static
class Teacher extends User {
  constructor(username, password){
    super(username)
    this.password = password
  }
}

const userTwo = new Teacher("sayan", "sayan123")
// console.log(userTwo.createId()) // typeError because of static keyword

