/* Closure in JavaScript */

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

// example-2
function sum(x){
  return function(y){
    return x + y
  }
}

const add5 = sum(5);
const add10 = sum(10);

console.log(add5(5))
console.log(add10(5))

