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

// check the guess is valid or not(validation)
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

// cleanup value, show & update(DOM)
function displayGuess(guess) {
  userInput.value = ''
  guessSlot.innerHTML += `${guess}, `
  numGuess++
  remaining.innerHTML = `${12 - numGuess}`
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
