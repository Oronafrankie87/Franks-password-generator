var generateBtn = document.querySelector("#generate");

var lowercaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  ";",
  ":",
  "'",
  '"',
  ",",
  ".",
  "<",
  ">",
  "/",
  "?",
  "\\",
];
// var passwordLength = 0
var passwordString = "";
var megaArray = [];

//The following code was written with the assistance of Fullstack bootcamp TAs and tutor.  It was put through ChatGPT to understand how it works.  This helped by deconstructing it and cementing how it works


//The following identifies a generatePassword function that first prompts the user with "Please enter a password length of 8 to 128 characters"
function generatePassword() {
  var passwordLength = prompt(
    "Please enter a Password length of 8 to 128 characters"
  );
  //The following IF statement states that if the password length is >=8 or <=128 the four following prompts are given to confirm they want those criteria met.
  if (passwordLength >= 8 && passwordLength <= 128) {
    var upperChoice = confirm("Do you want uppercase letters");
    var lowerChoice = confirm("Do you want lowercase letters");
    var numberChoice = confirm("Do you want numbers");
    var specialChoice = confirm("Do you want characters");
   //This IF statement states that if they dont select any of the four choices above the allert(Error no options selected) return
    if (
      upperChoice == false &&
      lowerChoice == false &&
      numberChoice == false &&
      specialChoice == false
    ) {
      //If statements always need to return a value, this value returned is the alert string
      return alert("Error no options selected");
      // generatePassword();
      //It at least one of the options from above is selected the else statement is executed.  THis creates an empty array called "megaArray" that will store the character options

    } else {
      var megaArray = [];
      //THis If statement checks if each option has been selected, then its corresponding array of characters in concatenated to the megaArray.
      if (upperChoice) {
        megaArray = megaArray.concat(uppercaseLetters);
      }
      if (lowerChoice) {
        megaArray = megaArray.concat(lowercaseLetters);
      }
      if (numberChoice) {
        megaArray = megaArray.concat(numbers);
      }
      if (specialChoice) {
        megaArray = megaArray.concat(specialCharacters);
      }
      //The following code is where the random password is generated
      var passwordString = "";
      for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * megaArray.length);
        passwordString += megaArray[randomIndex];
      }
      return passwordString;
    }
    //If non of the criteria above are met the alert invalid is returned
  } else {
    alert("invalid");
    return "";
  }
}

// either make a mega array with the choices and randomly select characters for a password (for loop) one line of math code. if statement .includes in array, megaArray.includes.
// or, if the user selects 1 characters set of another you

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
