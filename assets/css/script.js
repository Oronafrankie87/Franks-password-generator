var generateBtn = document.querySelector("#generate");
var lowercaseLetters = ["a", "b","c","d","e","f",  "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "\"", ",", ".", "<", ">", "/", "?", "\\"];
// var passwordLength = 0
var passwordString = ""
var megaArray = []

function generatePassword() {
  var passwordLength = prompt("Please enter a Password length of 8 to 128 characters")
  var upperChoice = confirm("Do you want uppercase letters")
  var lowerChoice = confirm("Do you want lowercase letters")
  var numberChoice = confirm("Do you want numbers")
  var specialChoice = confirm("Do you want characters")
if(upperChoice == false,
  lowerChoice == false, 
  numberChoice == false,
  specialChoice == false) {
    alert("Error no options selected")
    generatePassword();
  } else if(upperChoice) {
    // either make a mega array with the choices and randomly select characters for a password (for loop) one line of math code. if statement .includes in array, megaArray.includes.
    // or, if the user selects 1 characters set of another you 
  } 
  
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
