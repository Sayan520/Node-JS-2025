/* Call in JavaScript */

function SetUser(username){
  this.username = username
}

function CreateUser(username, email, password){
  SetUser.call(this, username)

  this.email = email
  this.password = password
}

const UserOne = new CreateUser("Sayan", "sayan@fb.com", "sayan123")
console.log(UserOne) 

// another example
const User = {
  firstName: "Sayan",
  lastName: "Ghosh",
  fullName: function(){
    return this.firstName + " " + this.lastName
  }
}

const UserTwo = {
  firstName: "Swastik",
  lastName: "Chowdhury"
}

// Calling User.fullName with UserTwo as the 'this' context
const userCreate = User.fullName.call(UserTwo)
console.log(userCreate) // Output: Swastik Chowdhury

// example three
const car = {
  brand: "Toyota",
  start: function() {
    console.log(`${this.brand} is starting.`);
  }
};

const bike = {
  brand: "Honda"
};

car.start.call(bike); // Output: Honda is starting.

/*
The call() method in JavaScript is a predefined method of Function instances
that allows to invoke a function with a specified this value and arguments provided individually.

Purpose & Use Cases:
1.Explicitly Setting this Context: call() is primarily used to control the this value within a function's execution. 
This is particularly useful when we want to "borrow" a method from one object and apply it to another, 
or when working with functions that rely on a specific this context.

2.Function Borrowing: We can use call() to invoke a method of one object on another object, 
effectively "borrowing" the method without explicitly assigning it.

3.Passing Arguments Individually: Unlike apply(), which takes arguments as an array, 
call() accepts arguments as a comma-separated list.
*/
