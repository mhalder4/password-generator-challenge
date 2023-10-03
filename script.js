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

function generatePassword() {
  //Length Prompt    "length"
  length = prompt("How long do you want your password to be? (Min: 8; Max: 128)");
  if (length < 8 || length > 128) {
    alert("That is not a valid password length. Please try again.");
    generatePassword();
  }

  //Lowercase Confirm    "hasLowerCase"
  hasLowerCase = confirm("Do you want your password to contain lowercase characters?");

  //Uppercase Confirm    "hasUpperCase"
  hasUpperCase = confirm("Do you want your password to contain uppercase characters?");

  //Numbers Confirm    "hasNumbers"
  hasNumbers = confirm("Do you want your password to contain numbers?");

  //Specials Confirm    "hasSpecialChar"
  hasSpecialChar = confirm("Do you want your password to contain special characters?");

  if (!hasLowerCase && !hasUpperCase && !hasNumbers && !hasSpecialChar) {
    alert("You must have at least one character type (lowercase. uppercase, numbers, or special characters) within your password. Please try again.");
    generatePassword();
  }

  alert("Your choices are appropriate for a password. Your password will be generated once you hit OK.");

  // console.log(length);
  // console.log(hasLowerCase);
  // console.log(hasUpperCase);
  // console.log(hasNumbers);
  // console.log(hasSpecialChar);
}

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
