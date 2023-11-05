// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

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

// Password Generator
var password ='';
for var i = 0; i <passwordLength; i++) {
  var randomIndex = Math.florr(Math.random() * charPool.length);
  password += charPool [randomIndex];
}

return password;