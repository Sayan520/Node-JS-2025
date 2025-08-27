/* foreach */

const programming = ["js", "py", "html", "css"]

programming.forEach(function (key) {
  console.log(key);
}) // normal function

// arrow function
programming.forEach( (key) => {
  console.log(key);
} )

// callback function does not have any function name

// use function reference
function printMe(value) {
  console.log(value);
}

programming.forEach(printMe) // use only function ref not function_name()

// foreach has multiple parameters
programming.forEach( (key, index, arr) => {
  console.log(key, index, arr); 
} ) // js 0 [ 'js', 'py', 'html', 'css' ]....


// array of objects
const coding = [
  {
    'programmingName' : "Python",
    'programmingTag' : 'py'
  },
  {
    'programmingName' : "JavaScript",
    'programmingTag' : 'js'
  },
  {
    'programmingName' : "Hypertext Markup Language",
    'programmingTag' : 'HTML'
  }
]

coding.forEach( (item) => {
  console.log(item.programmingName);
} )