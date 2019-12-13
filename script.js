var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Make another variable that takes n the password length (Hint: parseInt for the prompt) and make it a length variable
  var length = parseInt(prompt("How many characters should your password have ?"));
  console.log(length);

  while (isNaN(length) || length < 8 || length > 128) {
    alert("please enter a valid number");
    length = parseInt(prompt("How many characters should your password have ?"));
    console.log(length);
  }

  // create empty array to hold password value
  var password = [];

  var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "/", "~", "}", "{", "]", "[", ">", ".", ",", ":", ";", "?"];
  console.log(specialCharacters);
  var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  console.log(numberCharacters);
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  console.log(lowerCase);
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  console.log(upperCase);


  // create empty array to hold characterBank
  var characterBank = [];

  // check if user wants to use characters
  var specialCharactersInput = confirm("click OK to confirm special characters");
  console.log(specialCharactersInput);

  if (specialCharactersInput) {
    characterBank.push(specialCharacters);
  }

  var numberCharactersInput = confirm("click Ok to confirm numbers");
  console.log(numberCharactersInput);

  if (numberCharactersInput) {
      characterBank.push(numberCharacters);
  }
  var lowerCaseInput = confirm("click ok ro confirm lower case letters");
  console.log(lowerCaseInput);

  if (lowerCaseInput) {
    characterBank.push(lowerCase);
}

  var upperCaseInput = confirm("click Ok to confirm upper case letters");
  console.log(upperCaseInput);

  if (upperCaseInput) {
    characterBank.push(upperCase);
}

  // if we didn't select any character type...then characterBank will still be an empty array
  if (characterBank.length === 0) {
    alert("You didn't pick any characters!");
    return false;
  }

  // loop through passwordLength
  for (var i = 0; i < length; i++) {
    // select a random character set
    var randomCharacterSet = characterBank[Math.floor(Math.random() * characterBank.length )]
    // select a random character from character set
    var randomCharacter = randomCharacterSet[Math. floor(Math.random() * randomCharacterSet.length)]
    // push selected character into password arrayp
    password.push(randomCharacter);
  }

  // return password and join it together as a string
  return password.join("");

}


function writePassword() {
  var password = generatePassword();
  var passwordTextEl = document.querySelector("#password");
  passwordTextEl.value = password;
}

generateBtn.addEventListener("click", writePassword);