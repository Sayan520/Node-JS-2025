/****************************************** JS Tutorial: Functions part-2 ******************************************/ 


//  function showCartPrices(val1) {
//    return val1
//   }
  
//   console.log(showCartPrices(200, 400, 1200)) // 200; it is not passing multiple values at a time, to solve this..
  
/* REST Operator (how to pass multiple values/args in function) =>
By default, a function only receives the number of values equal to its parameters. To accept multiple unknown values, we use the REST operator (...). */

 function showCartPrices(...val1) {
   return val1
  } // rest operator(...) pass multiple values in a single array
  
  console.log(showCartPrices(200, 400, 1200)) // Output: [200, 400, 1200]
  
// another scenario (mix of normal + rest parameters):
 function showCartPrices(val2, val3, ...val1) {
   return val1
  }
  
console.log(showCartPrices(200, 400, 600, 800, 1000, 1200)) //  val2 => 200, val3 => 400 & val1: [600, 800, 1000, 1200]
  
/* Passing Objects into Functions */

let users = {
  username: "Sayan",
  age: 24
}

function userDetails(anyObject) {
  console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`); 
}

userDetails(users) // Username is Sayan and age is 24 (object pass and call)
userDetails({
  username: "Swastik",
  age: 25
}) // Username is Swastik and age is 25 (manually define object)


/* Passing Arrays into Functions */

let oddNumbers = [1, 3, 5, 7]

function getSecondNum(accessNum) {
  console.log(`the second number is ${accessNum[1]}`);
}

getSecondNum(oddNumbers) // the second number is 3
getSecondNum([9, 7, 5, 3]) // the second number is 7

// example-2
const marvelHeroes = ["Ironman", "Spiderman", "Hulk"]

function findHero(getHero) {
  return getHero[1]
}

const accessHero = findHero(marvelHeroes);
console.log(`the second superhero is: ${accessHero}`); // The second superhero is: Spiderman


/**** SUMMARY ****/
/* Rest Operator...:	Packs multiple arguments into an array
Object in function:	Pass data as key–value pairs
Array in function:	Access items using index (e.g., [1])
Best practice: ...rest param should be the last parameter in a function. */