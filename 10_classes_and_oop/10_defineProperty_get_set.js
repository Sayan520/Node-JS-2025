/* Function Based Getter & Setter in JS */

function User(email, password){
  this._email = email;
  this._password = password;

  // function is also an object so function can call Object's behaviors also
  Object.defineProperty(this, 'email' ,{

    get: function(){
      return this._email.toUpperCase()
    },

    set: function(value){
      this._email = value
    }
  })

  // password get and set
  Object.defineProperty(this, 'password' ,{

    get: function(){
      return this._password.toUpperCase()
    },

    set: function(value){
      this._password = value
    }
  })
}

const userOne = new User("sayan@gmail.com", "sayan123")
console.log(userOne.email)
console.log(userOne.password)