// Assignment code here
// vars for all possible characters
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = parseInt(prompt("How long would you like your password to be? (Enter a number between 8 and 128)"));
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid number between 8 and 128.");
    return "";
  }
  var passwordText = document.querySelector("#password");
  // prompts for chaarcter types
  var lowercase = confirm("Would you like to include lowercase letters?");
  var uppercase = confirm("Would you like to include uppercase letters?");

  // building an array of all poosible characters
  var possibleChars = [];
  if (lowercase) {
    possibleChars = possibleChars.concat(lowercaseChars);
  }
  if (uppercase) {
    possibleChars = possibleChars.concat(uppercaseChars);
  }
  
  passwordText.value = password;
  // Generate the password
  var password = "";
  for (var i = 0; i < length; i++) {
    password += possibleChars[Math.floor(Math.random() * possibleChars.length)];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
