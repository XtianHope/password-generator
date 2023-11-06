// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  // Defined Character Sets
  var lowercaseChar= "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChar= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChar= "0123456789";
  var specialChar= "!@#$%^&*()_+{}|<>~=-][';/.\,";
}

// Password Length Prompt
var passwordLength = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

// Alert of error if number is not a number
if (isNaN(passwordLength)) {
  alert ("Please enter a valid number between 8 and 128");
  return "";
}

 // Alert of error if number is not between 8 and 128
 if (passwordLength < 8 || passwordLength > 128) {
  alert ("Please enter a valid number between 8 and 128");
  return "";
}


// Prompt For What Character types to include
const includeLowercase= confirm("Including lowercase letters?");
const includeUppercase = confirm("Including uppercase characters?");
const includeNumeric = confirm("Including numeric characters?");
const includeSpecial = confirm("Including special characters?");



// Password Generator
var password ="";
  let finalCharacterSet = "";


for (var i = 0; i <passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * charPool.length);
  password += charPool [randomIndex];
}

return password;
}