/****************************************** JS Tutorial: Object De-structure and JSON API in JavaScript ******************************************/

const course = {
  id: 101,
  courseName: "JS Tutorials",
  price: 499
}

// course.price = 599 ; // try to avoid due to repetitions same things

// de-structure objects
const {price: p} = course // {key name: alias} = object name
console.log(p); // 499

// Json API
//  {
//   "name": "Sayan Ghosh",
//   "email": "sayan@google.com",
//   "isLoggedIn": true
//  }

// [
//   {},
//   {},
//   {}
// ]

/* object vs json : both are written inside {} but in object we declare as const/let/var but in json we don't use that. similarly, 
in json we declare keys inside "" but in object we don't use but both treated as string */