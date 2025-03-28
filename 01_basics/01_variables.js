const accountId = 101
let accountName = "Sayan Ghosh"
var accountAddress = "Kolkata" 
accountPassword = "Sayan@123"

let accountState;  //undefined

// accountName = "Sayan Ghoshh"
// accountAddress = "Kolkataa"
// accountPassword = "Sayan@1234"

// accountId = 102 # cannot modify constant variable.

/*
 Prefer not to use var. because of issue in block scope & functional scope.
*/

console.log(accountId);
console.table([accountName,accountAddress,accountPassword])  // Write an array as a table.

