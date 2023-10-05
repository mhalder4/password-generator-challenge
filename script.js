/*
  Make something that choose a random char type and grabs a random amount of char from that array that is no longer than "length-charTypes-1" so that there is at least 1 of each selected char type
*/

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Vars for what user wants in their password
var length;
// var hasLowerCase;
// var hasUpperCase;
// var hasNumbers;
// var hasSpecialChar;
var isValid;

var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var possibleNumber = "0123456789";
var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

var lowerCase = {
  name: "lowercase letters",
  isInPassword: false,
  possibleChars: lowerAlphabet.split(""),
  numInPassword: 0
}

var upperCase = {
  name: "uppercase letters",
  isInPassword: false,
  possibleChars: upperAlphabet.split(""),
  numInPassword: 0
}

var numbers = {
  name: "numbers",
  isInPassword: false,
  possibleChars: possibleNumber.split(""),
  numInPassword: 0
}

var specialChars = {
  name: "special characters",
  isInPassword: false,
  possibleChars: specialChar.split(""),
  numInPassword: 0
}


// // Splits strings above into an array
// var alphas = alphabet.split("");
// var numbers = number.split("");
// var specials = specialChar.split("");

var charTypes = [];
// Keeps track of number of each char type in password
// var numLowerAlphas = 0;
// var numUpperAlphas = 0;
// var numOfNumbers = 0;
// var numSpecials = 0;
// var numOfEachCharType = [];

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function confirmChar(object) {
  var bool = confirm(`Do you want your password to contain ${object.name}?`);
  if (bool) {
    charTypes.push(object.numInPassword);
  }
  return bool;
}



function generatePassword() {
  //Length Prompt    "length"
  length = prompt("How long do you want your password to be? (Min: 8; Max: 128)");
  if (length < 8 || length > 128) {
    alert("That is not a valid password length. Please try again.");
    generatePassword();
  }

  //Lowercase Confirm    "hasLowerCase"
  lowerCase.isInPassword = confirmChar(lowerCase);

  //Uppercase Confirm    "hasUpperCase"
  upperCase.isInPassword = confirmChar(upperCase);

  //Numbers Confirm    "hasNumbers"
  numbers.isInPassword = confirmChar(numbers);

  //Specials Confirm    "hasSpecialChar"
  specialChars.isInPassword = confirmChar(specialChars);

  if (!lowerCase.isInPassword && !upperCase.isInPassword && !numbers.isInPassword && !specialChars.isInPassword) {
    alert("You must have at least one character type (lowercase. uppercase, numbers, or special characters) within your password. Please try again.");
    generatePassword();
  }

  alert("Your choices are appropriate for a password. Your password will be generated once you hit OK.");



  lowerCase.numInPassword = 5;

  console.log(length);
  console.log(lowerCase.isInPassword);
  console.log(upperCase.isInPassword);
  console.log(numbers.isInPassword);
  console.log(specialChars.isInPassword);
  console.log(charTypes);
  // console.log(numOfEachCharType);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



console.log(lowerCase.possibleChars);
console.log(upperCase.possibleChars);
console.log(numbers.possibleChars);
console.log(specialChars.possibleChars);
