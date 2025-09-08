# Projects Related To DOM

[Github Link 🤖](https://github.com/Sayan520/Node-JS-2025/tree/main/07_projects)

## Project 1 : Color Scheme Switcher 🎨

```javascript 
const body = document.querySelector('body')
const btn = document.querySelectorAll('.button')

btn.forEach((key) => {
  key.addEventListener('click', (e)=>{
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id
        break;
      case 'red':
        body.style.backgroundColor = e.target.id
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id
        break;
      case 'violet':
        body.style.backgroundColor = e.target.id
        break;
      default:
        break;
    }
  })
})
```

## Project 2 : BMI Generator 🧮

```javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault() 

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value) 
  const result = document.querySelector('#results')
  const message = document.querySelectorAll('.message')

  /* validation */
  if(isNaN(height) || height <= 0){
    result.innerHTML = `Please add a valid height: ${height}`;
  } else if(isNaN(weight) || weight <= 0){
    result.innerHTML = `Please add a valid height: ${weight}`;
  } else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    
    /* show the result */
    result.innerHTML = `<span>Your BMI: ${bmi}</span><br>`;

    /* Show message with bmi */
    if (bmi < 18.6) {
      result.innerHTML += message[0].textContent;  
    } else if (bmi <= 24.9) {
      result.innerHTML += message[1].textContent;  
    } else {
      result.innerHTML += message[2].textContent;  
    }
  }
  });

```

## Project 3 : Digital Clock ⏰

```javascript
const clock = document.getElementById('clock')

setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString);
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)
```