/* forin */

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

// arrays has keys start from 0 to ...

// maps is not iterable



