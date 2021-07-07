// Assignment code here
// Make arrays for symbols, numbers, letters, 
// Potentially concat all arrays and draw letters from there
// Potentially create upper and lower case array for alphabet
// make functions to call each string from each array and include if statements controlling which arrays are allowed and make a password 
// need global variables so that they may be accessed and changed by functions 
//declaring arrays
const lowerAlph = ["a", "b", "c", "d","e", "f", "g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const upperAlph = lowerAlph.map(lowerAlph => lowerAlph.toUpperCase());

const symbols = ["!", "@", "#", "$", "%", "'", "(", ")", "*", "+", ",", "&", "-", ".", "/", "<", "=", ">", "?", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//declaring variables 
var confirmNum; 
var confirmLowerAlph; 
var confirmUpperAlph; 
var confirmSpecial;
var pickedChars;

//prompt asking how long the password needs to be 
function confirmLength() {
 passLength = parseInt(prompt("How long would you like your password to be? Please choose a number between 8 and 128 characters."));
  if (!/^[0-9.]/.test(passLength)) {
    alert("That is not a valid response. Please enter a nu/mber between 8 and 128");
    confirmLength(); 
  }
  if(passLength < 8 || passLength > 128) {
    alert("That is not a valid number of characters, try again");
    confirmLength(); 
  } 
  console.log(passLength);
}



//using alerts, ask what characters should be allowed in the password 

function confirmChars () {
  confirmNum = confirm("Would you like numbers in your password?");
  confirmLowerAlph = confirm("Would you like lower-case letters in your password?");
  confirmUpperAlph = confirm("Would you like upper-case letters in your password?");
  confirmSpecial = confirm("Would you like spcecial characters in your password?");
  console.log(confirmNum, confirmLowerAlph, confirmUpperAlph, confirmSpecial);
} 

//use if statements to decide which chars are allowed, then concat into a string which will be put into the password array

function generatePassword(){
  
  //confirm the length of the password
  confirmLength();

  //confirm the characters allowed in the password 
  confirmChars();
  
  //add conditionals and concat arrays if conditionals are met 
  //all four are truthy
  if(confirmNum && confirmLowerAlph && confirmUpperAlph && confirmSpecial) {
    confirmed = numbers.concat(upperAlph, symbols, lowerAlph);
    console.log(confirmed);
  } else if

  //only three are truthy 
  (confirmNum && confirmLowerAlph && confirmUpperAlph) {
    confirmed = numbers.concat(lowerAlph, upperAlph);
    console.log(confirmed);
  } else if 
  (confirmNum && confirmUpperAlph && confirmSpecial) {
    confirmed = numbers.concat(upperAlph, symbols);
    console.log(confirmed);
  } else if 
  (confirmUpperAlph && confirmLowerAlph && confirmSpecial) {
    confirmed = upperAlph.concat(lowerAlph, symbols);
    console.log(confirmed);
  } else if
  (confirmNum && confirmLowerAlph && confirmSpecial) {
    confirmed = numbers.concat(lowerAlph, symbols);
    console.log(confirmed);
  } else if 

  //if two are truthy 
  (confirmNum && confirmLowerAlph) {
    confirmed = numbers.concat(lowerAlph);
    console.log(confirmed);
  } else if 
  (confirmNum && confirmUpperAlph) {
    confirmed = numbers.concat(upperAlph);
    console.log(confirmed);
  } else if 
  (confirmNum && confirmSpecial) {
    confirmed = numbers.concat(symbols);
    console.log(confirmed);
  } else if 
  (confirmLowerAlph && confirmUpperAlph) {
    confirmed = lowerAlph.concat(upperAlph);
    console.log(confirmed);
  } else if 
  (confirmLowerAlph && confirmSpecial) {
    confirmed = lowerAlph.concat(symbols);
    console.log(confirmed);
  } else if 
  (confirmUpperAlph && confirmSpecial) {
    confirmed = upperAlph.concat(symbols);
    console.log(confirmed);
  } else if 

  //if one is truthy
  (confirmNum) {
    confirmed = numbers; 
    console.log(confirmed);
  } else if 
  (confirmUpperAlph) {
    confirmed = upperAlph;
    console.log(confirmed);
  } else if 
  (confirmLowerAlph) {
    confirmed = lowerAlph;
    console.log(confirmed);
  } else if 
  (confirmSpecial) {
    confirmed = symbols;
    console.log(confirmed);
  }

  //add an array to push password into 
  var randPassword = [];
  //randPassword.toString();
  //prints out with commas
  
  //make randPassword print out without commas 

  //randomly select characters
  for (var i = 0; i < passLength; i++) {
    console.log(passLength);
    var pickedChars = confirmed[Math.floor(Math.random() * confirmed.length)];
    randPassword.push(pickedChars);
    console.log(randPassword);
  }
  var password = randPassword.join("");
  console.log(password);
  return password;


}

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
