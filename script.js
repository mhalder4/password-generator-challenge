/*
  Make something that choose a random char type and grabs a random amount of char from that array that is no longer than "length-charTypes-1" so that there is at least 1 of each selected char type
*/

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Vars for what user wants in their password
var length;
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

var charTypes = [];


function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Ask for the character types the user would like to include.
function confirmChar(object) {
  var bool = confirm(`Do you want your password to contain ${object.name}?`);
  if (bool) {
    charTypes.push(object);
  }
  return bool;
}


// Randomizes the amount of characters of each character type
function randomizeNumOfChars() {
  var charTypesLeft = charTypes.length - 1;
  charTypes.sort(function () { return Math.random() - 0.5 });
  for (var i = 0; i < charTypes.length; i++) {
    if (i < charTypes.length - 1) {
      var randomNumber = generateRandomNumber(1, length - (charTypesLeft - i));
      length = length - randomNumber;
    } else {
      randomNumber = length;
    }
    charTypes[i].numInPassword = randomNumber;
  }
  console.log(charTypes);
  // charTypes = [];
}

//  Pulls characters from the available options for the included character types before reandomizing the order of the created password.
function randomizePasswordContents() {
  var passwordChar;
  var password = [];
  for (var i = 0; i < charTypes.length; i++) {
    for (var j = 0; j < charTypes[i].numInPassword; j++) {
      var randomNum = generateRandomNumber(0, charTypes[i].possibleChars.length - 1);
      passwordChar = charTypes[i].possibleChars[randomNum];
      password.push(passwordChar);
      console.log(password);
    }
  }
  // charTypes = [];
  password.sort(function () { return Math.random() - 0.5 });
  return password.join("");
}

// Prompts the user for password contents and generates that password
function generatePassword() {
  charTypes = [];

  //Length Prompt    "length"
  length = prompt("How long do you want your password to be? (Min: 8; Max: 128)");
  // length = Number(length);
  // console.log(length);
  if (!(length >= 8 && length <= 128)) {
    alert("That is not a valid password length. Please try again.");
    isValid = false;
    // generatePassword();
    // return;
  } else {
    isValid = true;
  }

  if (isValid) {
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
      isValid = false;
    } else {
      isValid = true;
    }
  }


  if (isValid) {
    alert("Your choices are appropriate for a password. Your password will be generated once you hit OK.");
    randomizeNumOfChars();
    return (randomizePasswordContents());
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

