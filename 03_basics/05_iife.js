/* Immediately Invoked Function Expressions (IIFE) */

// Named IIFE
(function dbCon() {
  console.log(`Database Connected!`);
})(); // NOTE: use `;` to separate multiple IIFEs

// the first () is using for function definition and the second () is for function execution call

// Arrow Function IIFE
( (dbname) => {
  console.log(`${dbname} Database Connected!`);
} )("MySQL")


/*
IIFE is a function that runs immediately after its definition.
It helps to avoid polluting the global scope by creating a private scope.
Syntax: (function(){ ... })(); 
*/