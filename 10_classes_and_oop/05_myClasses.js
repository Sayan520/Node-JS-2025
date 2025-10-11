/* Class in JavaScript */

class User {
  constructor(username, email, password){
    this.username = username
    this.email = email
    this.password = password
  }

  encryptPassword(){
    return `${this.password}abc`
  }

  changeUsername(){
    return `${this.username.toUpperCase()}`
  }
}

const userOne = new User("sayan", "sayan@google.com", "sayan123")
console.log(userOne.encryptPassword())
console.log(userOne.changeUsername())

// using function (behind the scene)

function User2(username, email, password){
  this.username = username
  this.email = email
  this.password = password
}

User.prototype.encryptPassword = function(){
  return `${this.password}abc`
}

User.prototype.changeUsername = function(){
  return `${this.username.toUpperCase()}`
}

const userTwo = new User("sayan", "sayan@google.com", "sayan123")
console.log(userTwo.encryptPassword())
console.log(userTwo.changeUsername())