/* Object Based Getter & Setter in JS */

const User = {
  _email: "sayan@gmail.com",
  _password: "sayan123",

  get email(){
    return this._email.toUpperCase()
  },

  set email(value){
    this._email = value
  }
}

const UserOne = Object.create(User)
console.log(UserOne.email)