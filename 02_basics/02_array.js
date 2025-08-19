/****************************************** JS Tutorial - Arrays part 2 ******************************************/

// Array methods

const marvel_heroes = ["Ironman", "Thor", "Hulk"]
const dc_heroes = ["Batman", "Superman", "Wonder Woman"]

// push to add two arrays together
marvel_heroes.push(dc_heroes) // push adds an array as a single element
console.log(marvel_heroes); // [ 'Ironman', 'Thor', 'Hulk', [ 'Batman', 'Superman', 'Wonder Woman' ] ]
console.log(marvel_heroes.length); // 4
console.log(marvel_heroes[3][1]); // Superman

// concat to merge two arrays
const all_heroes = marvel_heroes.concat(dc_heroes) // concat merges arrays
console.log(all_heroes); // [ 'Ironman', 'Thor', 'Hulk', 'Batman', 'Superman', 'Wonder Woman' ]
console.log(all_heroes.length); // 6

// spread operator to merge arrays
const all_heroes_spread = [...marvel_heroes, ...dc_heroes] // spread operator merges arrays
console.log(all_heroes_spread); // [ 'Ironman', 'Thor', 'Hulk', 'Batman', 'Superman', 'Wonder Women' ]

// flat to flatten nested arrays
const nested_array = [1, 2, [3, 4], [5, 6, [7, 8]]]; 
const flattened_array = nested_array.flat(Infinity); // flat with Infinity flattens all levels
console.log(flattened_array); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// manually convert to array
console.log(Array.isArray("Sayan")); // false
console.log(Array.from("Sayan")); // [ 'S', 'a', 'y', 'a', 'n' ]
console.log(Array.from({name: "Sayan"})); // []

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]

