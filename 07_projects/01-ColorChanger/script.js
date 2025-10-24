const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button) {
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e); // Shows the event object
    console.log(e.target); // Shows the element that was clicked
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'red'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'violet'){
      body.style.backgroundColor = e.target.id
    }
  })
})

/****************** OR  ************************/

// document.querySelectorAll('.button').forEach((btn)=>{
//   btn.addEventListener('click', ()=>{
//     document.body.style.backgroundColor = btn.id
//   })
// })


/* Key Points:

Step 1: Select all the buttons (grey, red, yellow, violet) 
        and also select the body (to change its background color).

Step 2: Use forEach loop on the buttons 
        so we can work with each button one by one.

Step 3: Add an event listener ("click") to every button.
        - When a button is clicked, a callback function runs.

Step 4: The callback gets an event object (e).
        - e.target → the element that was clicked (the specific button).

Step 5: Check the button’s id (grey, red, yellow, violet)
        and update the body’s background color accordingly.
*/
