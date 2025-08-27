/* While Loop */

let index = 0

while (index <= 10) {
  console.log(`my value is ${index}`);
  index = index + 2
}

// infinite loop possibility
let myArr = [101, 102, 103, 104]
let i = 0

while (i < myArr.length){
  if (i == 2){
    console.log(`my lucky no is ${myArr[i]}`);
    i++
    continue;
  }
  console.log(`my values are ${myArr[i]}`);
  i++
}

// array in while loop
let myArray = ["ironman", "superman", "spiderman"]
let j = 0

while (j < myArray.length) {
  console.log(`my hero is ${myArray[j]}`);
  j = j + 1
}


/* Do-While Loop */

let score = 1

do {
  console.log(`my score is ${score}`);
  score = score + 2
} while (score <= 11);


// exception if we declare score as 12
let score2 = 12
do {
  console.log(`my score is ${score2}`);
  score = score2 + 2
} while (score2 <= 11);