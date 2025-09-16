const form = document.querySelector('form')

// this usecase will give empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
  e.preventDefault() // stop the default action for the form 

  const height = parseInt(document.querySelector('#height').value) // parseInt: convert from str to int
  const weight = parseInt(document.querySelector('#weight').value) 
  const result = document.querySelector('#results')
  const message = document.querySelectorAll('.message')

  // validation
  if(isNaN(height) || height <= 0){
    result.innerHTML = `Please add a valid height: ${height}`;
  } else if(isNaN(weight) || weight <= 0){
    result.innerHTML = `Please add a valid height: ${weight}`;
  } else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    
    // show the result
    result.innerHTML = `<span>Your BMI: ${bmi}</span><br>`;

    // Show message with bmi
    if (bmi < 18.6) {
      result.innerHTML += message[0].textContent;  
    } else if (bmi <= 24.9) {
      result.innerHTML += message[1].textContent;  
    } else {
      result.innerHTML += message[2].textContent;  
    }
  }
  });
