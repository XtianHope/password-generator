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
  const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChar = "0123456789";
  const specialChar = "!@#$%^&*()_+{}|<>~=-][';/.\,";


  // Password Length Prompt
  const passwordLength = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));


  // Alert of error if number is not not a number
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
  const includeLowercase = confirm("Including lowercase letters?");
  const includeUppercase = confirm("Including uppercase characters?");
  const includeNumeric = confirm("Including numeric characters?");
  const includeSpecial = confirm("Including special characters?");




  // Password Generator
  var password ="";
    let finalCharacterSet = "";
   
    let currentIndex = 0;
    if(includeLowercase == true) {
      finalCharacterSet = finalCharacterSet + lowercaseChar;
      const randomIndex = Math.floor(Math.random() * lowercaseChar.length);
      password = password + lowercaseChar[randomIndex];
      currentIndex++;
    }


    if(includeUppercase == true) {
      finalCharacterSet = finalCharacterSet + uppercaseChar;
      const randomIndex = Math.floor(Math.random() * uppercaseChar.length);
      password = password + uppercaseChar[randomIndex];
      currentIndex++;
    }


    if(includeNumeric == true) {
      finalCharacterSet = finalCharacterSet + numberChar;
      const randomIndex = Math.floor(Math.random() * numberChar.length);
      password = password + numberChar[randomIndex];
      currentIndex++;
    }


    if(includeSpecial == true) {
      finalCharacterSet = finalCharacterSet + specialChar;
      const randomIndex = Math.floor(Math.random() * specialChar.length);
      password = password + specialChar[randomIndex];
      currentIndex++;
    }


    for (let i = currentIndex; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * finalCharacterSet.length);
      password = password + finalCharacterSet[randomIndex];
  }


  return password;
}
