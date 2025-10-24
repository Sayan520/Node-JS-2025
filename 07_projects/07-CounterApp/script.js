const increaseBtn = document.getElementById('btn-increase');
const decreaseBtn = document.getElementById('btn-decrease');
const counterDisplay = document.querySelector('.counter-display');

let count = 0;

// Show initial value
counterDisplay.innerHTML = `<h2>Current Count: ${count}</h2>`;

// Function to update the counter display
function updateDisplay(message, value) {
  counterDisplay.innerHTML = `<h2>${message}: ${value}</h2>`;
}

// Function to increase the counter
function handleIncrease() {
  count++;
  updateDisplay('Increased Count', count);
}

// Function to decrease the counter
function handleDecrease() {
  count--;
  updateDisplay('Decreased Count', count);
}

// Event listeners for both buttons
increaseBtn.addEventListener('click', () => {
  if (count < 10) {
    handleIncrease();
  }
});

decreaseBtn.addEventListener('click', () => {
  if (count > 0) {
    handleDecrease();
  }
});
