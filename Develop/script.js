// Assignment code here

var numbers = "0123456789";
var symbols = "!@#$%^&*()_+{}|:?><[]";
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = alphaLower.toUpperCase();



function generatePassword(){
  
  // Clears password 
  var password = "";


  // Password variables
  var passwordLength = prompt("How long would you like your password to be? Password must be between 8-128 characters.");
  var confirmUpper = confirm("Would you like your password to contain Upper case letters?");
  var confirmLower = confirm("Would you like your password to contain lower case letters?");
  var confirmNumber = confirm ("Would you like your password to contain numbers?");
  var confirmSymbols = confirm("Would you like your password to contain symbols?");

  var passwordText = document.querySelector("#password");

  // passwordLength = parseInt(passwordLength);

  if (passwordLength < 8 || passwordLength > 128){
    window.alert("Password must be betten 8 and 128 characters.")
    return"";
  }
  for(var i = 0; i < passwordLength; i++){

    if(confirmUpper && password.length < passwordLength){
      password = password += alphaUpper.charAt(Math.floor(Math.random() * alphaUpper.length));
    }

    if(confirmLower && password.length < passwordLength){
      password = password += alphaLower.charAt(Math.floor(Math.random() * alphaLower.length));
    }

    if(confirmNumber && password.length < passwordLength){
      password = password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    if(confirmSymbols && password.length < passwordLength){
      password = password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }

    passwordText.value = password;

  }

  console.log(password);
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
