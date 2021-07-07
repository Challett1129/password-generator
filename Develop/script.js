// Assignment code here
// Make arrays for symbols, numbers, letters, 
// Potentially concat all arrays and draw letters from there
// Potentially create upper and lower case array for alphabet
// make functions to call each string from each array and include if statements controlling which arrays are allowed and make a password 

const lowerAlph = ["a", "b", "c", "d","e", "f", "g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const upperAlph = lowerAlph.map(lowerAlph => lowerAlph.toUpperCase());

const symbols = ["!", "@", "#", "$", "%", "'", "(", ")", "*", "+", ",", "&", "-", ".", "/", " < ", "=", " > ", " ? ", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

console.log(lowerAlph, upperAlph);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
