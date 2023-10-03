// Assignment Code
var generateBtn = document.querySelector("#generate");

var length;
var hasLowerCase;
var hasUpperCase;
var hasNumbers;
var hasSpecialChar;
var isValid;

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

var alphas = alphabet.split("");
var numbers = number.split("");
var specials = specialChar.split("");

// function

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(alphas);
console.log(numbers);
console.log(specials);
