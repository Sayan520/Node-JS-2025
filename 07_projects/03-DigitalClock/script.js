const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString);
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)

/* setInterval: event controls in javascript..
it takes a method and set a interval time to run continuously with 
that particular interval till the program is running.
*/

