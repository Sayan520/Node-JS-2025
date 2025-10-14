/* Getter & Setter in JavaScript */

class User {
  constructor(username, password){
    this.username = username;
    this.password = password;
  }

  // username get and set
  get username(){
    return this._username.toUpperCase() // private properties start with an underscore
  }

  set username(value){
    this._username = value
  }

  // password get and set
  get password(){
    return `User's Password: ${this._password.toUpperCase()}123`
  }

  set password(value){
    this._password = value
  }
}

const userOne = new User("sayanghosh", "sayan")
console.log(userOne.username)
console.log(userOne.password)

/*
Getters & Setters are special methods that allows to define how an object's properties are accessed and modified.
They provide a way to control access to properties, enabling data validation, computed properties, and encapsulation.
*/