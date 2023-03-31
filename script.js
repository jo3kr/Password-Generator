// Assignment code here
// vars for all possible characters
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = ",.';:?!@#$%^&*()-_=+<>/[]{}|";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = parseInt(
    prompt(
      "How long would you like your password to be? (Enter a number between 8 and 128)"
    )
  );
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid number between 8 and 128.");
    return "";
  }
  // prompts for character types
  var includeLowercase = confirm(
    "Would you like to include lowercase letters in your password?"
  );
  var includeUppercase = confirm(
    "Would you like to include uppercase letters in your password?"
  );
  var includeNumeric = confirm(
    "Would you like to include numeric characters in your password?"
  );
  var includeSpecial = confirm(
    "Would you like to include special characters in your password?"
  );

  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumeric &&
    !includeSpecial
  ) {
    alert(
      "Please select at least one character type to include in your password."
    );
    return;
  }

  var characters = "";
  if (includeLowercase) {
    characters = characters.concat(lowercase);
  }
  if (includeUppercase) {
    characters = characters.concat(uppercase);
  }
  if (includeNumeric) {
    characters = characters.concat(numeric);
  }
  if (includeSpecial) {
    characters = characters.concat(special);
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
