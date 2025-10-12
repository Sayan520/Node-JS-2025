// Universal Constant which value should never change
console.log(Math.PI)
Math.PI = 5 // cannot override
console.log(Math.PI)

/* Object hidden properties */
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

/* Manual Object descriptor property set */
const user = {
  username: "sayan",
  email: "sayan@email.com",
  isLoggedIn: true,

  logMe: function(){
    console.log(`Username: ${this.username}`);
  }
} 

console.log(user)

console.log(Object.getOwnPropertyDescriptor(user, "username"))

// set property as enumerable: false
Object.defineProperty(user, "username", {
  enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(user, "username"))

// try to use example for check
for (const [key, value] of Object.entries(user)) {
  if (typeof value !== 'function') {
    console.log(`${key} : ${value}`)
  }
}
