// Node.js program to demonstrate the
// crypto.scrypt() method
  
// Including crypto module
var crypto = require('crypto');
  
// Calling scrypt method with some of its parameter
crypto.scrypt('GfG', 'ffdgsg', 32, (err, derivedKey) => {
  
  if (err) throw err;
  
  // Prints derived key as buffer
  console.log("The derived key1 is :", derivedKey);
});
  
// Calling scrypt method with the parameter N
crypto.scrypt('GeeksforGeeks', 'tfytdx', 128,
           { N: 512 }, (err, derivedKey) => {
  
  if (err) throw err;
  
  // Prints derived key as buffer
  console.log("The derived key2 is :", derivedKey);
  console.log();
});