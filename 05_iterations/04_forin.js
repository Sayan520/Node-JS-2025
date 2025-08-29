/* For-In Loops */

// object
const myObj = {
  'js' : "JavaScript",
  'py' : "Python",
  'css' : "Cascading Style Sheet",
}

for (const key in myObj) {
  console.log(`${key} is shortcut for ${myObj[key]}`);
}

// array

const myArr = ["js", "py", "html", "css"]

for (const key in myArr) {
  console.log(myArr[key]); 
}

/* 1. arrays has keys start from 0 to ...
2. we can't use maps in for-in because maps is not iterable
3. in For-In loops by default it prints only keys, not values that why array shows as 0,1...
*/
