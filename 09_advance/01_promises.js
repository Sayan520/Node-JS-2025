/* Promise */ 
const promiseOne = new Promise(function(resolve, reject){
  // Do an async task
  // DB calls, cryptography, network
  setTimeout(function(){
    console.log('Async task is completed.')
    resolve() // connect resolve() with then()
  }, 1000) 
})

promiseOne.then(function(){
  console.log('Promise consumed.')
})

// another way to create promise
new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log('Async task 2 completed.')
    resolve()
  }, 1000)
}).then(function(){
  console.log('Promise resolved.')
})

// promise three
const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({username: "Sayan Ghosh", email: "sayan@email.com"})
  }, 1000)
})

promiseThree.then(function(user){
  console.log(user)
})

