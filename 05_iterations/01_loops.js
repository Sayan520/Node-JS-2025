/* LOOPS in JS */

// basic syntax
for (let i = 0; i <= 10; i++) {
  const element = i
  if (element == 5) {
    console.log("5 has been reached here!");
  }
  console.log(element);
}

// nested loops with arithmetic operator
for (let i = 1; i <= 10; i++) {
  // console.log(`Outer loop: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop: ${i} and Inner loop value: ${j}`);
    // console.log(i + '*' + j + '=' + i*j);    
  }
}

// array in loop
let myArray = ["Sun", "Moon", "Earth"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

// break and continue
for (let index = 1; index <= 20; index++) {
  if (index == 5){
    console.log(`Detected 5`);
    break;
  }
  console.log(`value of i is ${index}`);
}

for (let index = 1; index <= 20; index++) {
  if (index == 5){
    console.log(`Detected 5`);
    continue;
  }
  console.log(`value of i is ${index}`);
}

/* break vs continue: 
break terminate the current loop based on condition but 
continue skips the current iteration but won't stop the entire loop */