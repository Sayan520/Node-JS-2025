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


## Project 4 : Guess The Number 🔢

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1)

const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#submit')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

// if user is allowed to play game then..
if(playGame) {
  submit.addEventListener('click', function(e){
    e.preventDefault()

    const guess = parseInt(userInput.value)
    console.log(guess);
    validateGuess(guess)
  })
}

// check the number is valid or not
function validateGuess(guess) {
  if(isNaN(guess)){
    alert('Please enter a valid number.')
  } else if(guess < 1){
    alert('Please enter a number more than 1')
  } else if(guess > 100){
    alert('Please enter a number less than 100')
  } else {
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

// message display based on user's random value
function checkGuess(guess) {
  if(guess === randomNumber){
    displayMessage(`Congrats! You guessed it right.`)
    endGame()
  } else if(guess < randomNumber){
    displayMessage(`The number is too low! Try again!`)
  } else if(guess > randomNumber){
    displayMessage(`The Number is too high! Try again!`)
  }
}

// cleanup value, show & update
function displayGuess(guess) {
  userInput.value = ''
  guessSlot.innerHTML += `${guess}, `
  numGuess++
  remaining.innerHTML = `${11 - numGuess}`
}

// message show as innerHTML
function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

// end the current game
function endGame() {
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

// start a new game
function newGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1)
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}

```

# Projects Related To DOM & Async JS events

## Project 5 : Unlimited Colors 💥

```javascript
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let interValId;

let startChangingColor = function () {
  let changeColor = function () {
    document.body.style.backgroundColor = randomColor();
  };
  if (!interValId) {
    interValId = setInterval(changeColor, 1000);
  }
};

let stopChangingColor = function () {
  clearInterval(interValId);
  interValId = null;
};

document.getElementById("start").addEventListener("click", startChangingColor);

document.getElementById("stop").addEventListener("click", stopChangingColor);
```

## Project 6 : Keyboard Check ⌨️ 

```javascript
let insert = document.getElementById("insert");

window.addEventListener("keydown", function (e) {
  insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? 'Space' : e.key }</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
  `;
});
```