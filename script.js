alert("Hello!Please answer few questions to generate the password.")

var userInput = prompt("Choose the characters for you password including special characters and numbers");
console.log(userInput);

var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","_","+","=","-","/","~","}","{","]","[",">",".",",",":",";","?"];
console.log(specialCharacters);
var numberCharacters = ["0","1","2","3","4","5","6","7","8","9"];
console.log(numberCharacters);
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
console.log(lowerCase);
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
console.log(upperCase);

  if (length < 8 || length > 128) {
    alert(" it should be between 8 and 128 characters.");
  };
  if (isNaN(length)) {
    alert("Please choose a number and special character.")
  };

