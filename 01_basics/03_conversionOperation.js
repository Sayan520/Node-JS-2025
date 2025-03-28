let Score = "33";
let Score1 = "33n";
let Score2 = null;
let Score3 = undefined;
let Score4 = true; 
let Score5 = "Sayan"; 

let newScore = Number(Score)
let newScore1 = Number(Score1)
let newScore2 = Number(Score2)
let newScore3 = Number(Score3)
let newScore4 = Number(Score4)
let newScore5 = Number(Score5)

console.log(typeof Score);

console.log(newScore) // 33
console.log(newScore1) // NaN (NotANumber)
console.log(newScore2) // 0
console.log(newScore3) // NaN
console.log(newScore4) // 1 for true; 0 for false and viceversa
console.log(newScore5) // NaN

let isLogIn = 1;
let isLog = "";

console.log(Boolean(isLogIn)); // true
console.log(Boolean(isLog)); // false


let someNum = 25;
let newStr = String(someNum)

console.log(newStr); //25
console.log(typeof(newStr)); // String


// ***** Operations ****

let value = 3;
let negValue = -value; // -3

console.log(negValue)

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**2);

console.log(1 + 2 + "2"); // 32
console.log("1" + 2 + 2); // 122

// Postfix & Prefix

var a = 1;
a = a++;
console.log(a); // 1

var b = 1;
b = ++b;
console.log(b); // 2

var c = 1;
c += 1; // c = c+1
console.log(c); //2

