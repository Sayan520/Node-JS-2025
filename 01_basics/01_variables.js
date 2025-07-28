// JS Tutorial : Variables in JavaScript

const accountId = 101
let accountName = "Sayan Ghosh"
var accountAddress = "Kolkata" 
accountPassword = "Sayan@123"
let accountState;  //undefined

accountName = "Swastik Ghosh" 
accountAddress = "Mumbai"
accountPassword = "Bittu@123"

// accountId = 102 # cannot modify constant variable.

console.log(accountId); // 101
console.table([accountName,accountAddress,accountPassword, accountState])  // Displaying variables in a table format

/*
Variables in JavaScript:
1. const - Constant variable, cannot be reassigned.
2. let - Block scoped variable, can be reassigned.
3. var - Function scoped variable, can be reassigned but not recommended due to scope issues. So better to avoid it.
4. undefined - Variable declared but not assigned a value.
5. null - Variable explicitly set to no value.
*/
