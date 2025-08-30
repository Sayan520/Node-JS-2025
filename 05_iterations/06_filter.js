/* Filter in JS */

const coding = ["js", "py", "css", "html"];

const values = coding.forEach((item) => {
  // console.log(item);
  return item;
});

console.log(values); // undefined

/* Return value in forEach: None (undefined) */

// Filter
const myNums = [1, 2, 3, 4, 5, 6];

const myValues = myNums.filter((num) => num > 2); // implicit return
console.log(myValues);

const myNumbers = myNums.filter((num) => {
  return num > 2;
}); // explicit return so use must `return`

console.log(myNumbers);

// same task in object
const newNums = [];

myNums.forEach((keys) => {
  if (keys > 2) {
    newNumbs.push(keys);
  }
});

console.log(newNums);

// object.filter
const books = [
  {
    title: "Book One",
    genre: "History",
    publish: 1997,
    edition: 2001,
  },
  {
    title: "Book Two",
    genre: "Science",
    publish: 1994,
    edition: 2000,
  },
  {
    title: "Book Three",
    genre: "History",
    publish: 1990,
    edition: 2009,
  },
  {
    title: "Book Four",
    genre: "Art",
    publish: 1991,
    edition: 2004,
  },
  {
    title: "Book Five",
    genre: "Science",
    publish: 1990,
    edition: 2012,
  },
];

const userBooks = books.filter((bk) => bk.genre === "History");
// console.log(userBooks);

const editionCheck = books.filter((ed) => {
  return ed.edition > 2000 && ed.genre === "Science";
});
console.log(editionCheck);

//example-2
const userData = [
  {
    id: 1,
    body: "First Item",
    severity: 3,
    status: 0,
  },
  {
    id: 2,
    body: "Second Item",
    severity: 2,
    status: 1,
  },
  {
    id: 3,
    body: "Third Item",
    severity: 3,
    status: 1,
  },
  {
    id: 4,
    body: "Fourth Item",
    severity: 2,
    status: 0,
  },
  {
    id: 5,
    body: "Fifth Item",
    severity: 4,
    status: 1,
  },
];

const dataStore = userData.filter(
  (data) => data.status === 0 && data.severity > 2);
  
console.log(dataStore);

/* must declare return keyword when use scope in function, 
otherwise if use implicit return () don't need return */

/* Filter is used for returns the elements of an array 
that meet the condition (true/false) specified in a callback function.*/

