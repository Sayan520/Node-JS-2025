// forof

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
  console.log(num);
}

const str = "Hello World"

for (const greet of str) {
  // if (greet == " ") {
  //   console.log("now please stop!");
  //   continue;
  // }
  console.log(`each char is: ${greet}`);
}

/* Maps */

/* Map is an object. It holds key-value pairs and 
It maintains the original insertion order of the keys.
it is unique in the Map's collection */

const myMap = new Map()
myMap.set("IN", 'India')
myMap.set("USA", 'United Set Of America')
myMap.set("Fr", 'France')
myMap.set("IN", 'India') // does not contain duplicate

console.log(myMap); 

// Map(3) {
//   'IN' => 'India',  
//   'USA' => 'United Set Of America',
//   'Fr' => 'France'
// }


for (const key of myMap) {
  console.log(key)
} // returns a single array

// to prevent this, use array destructure

for (const [key, value] of myMap) {
  console.log(key,':-', value);
}

// object is not iterable in forof syntax

const myObj = {
  '1': "one",
  '2': "two",
  "3": 'three'
}

for (const obj of myObj) {
  console.log(obj);
} // TypeError: myObj is not iterable

for (const [key, value] of myObj) {
  console.log(key,':-', value);
} // TypeError: myObj is not iterable

/* Object vs Map =>
1.Map maintains the original insertion order of the keys, but object does not
2. Map is unique for every key-value pair, object contains duplicate.
*/


