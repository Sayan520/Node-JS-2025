/* Maps in JS */

const num = [1, 2, 3, 4, 5, 6];

const updatedNum = num.map((val) => val + 10);
console.log(updatedNum); // [ 11, 12, 13, 14, 15, 16 ]

// alternative solution
const anotherNum = num.map((key) => {
  if (key) {
    return key + 10;
  }
});

console.log(anotherNum); // [ 11, 12, 13, 14, 15, 16 ]


// chaining

const multipleNum = num
                    .map( (val) => val * 10 )
                    .map( (val) => val + 10 )
                    .filter( (val) => val >= 40 )

console.log(multipleNum);
