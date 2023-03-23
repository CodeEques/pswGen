// Assignment code here

// A function to Generate Password

function generatePassword() {
  // Prompting user for password criteria 

  // An password Array variable to concat password positve choices
  var passwordCriteria = "";

  // 1. length 8 to 128 characters - minimum number of characters set in the promp
  var numberOfCharacters = prompt("Enter number of characters between 8 to 128", 8);
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    alert("please enter a valid number between 8 to 128");
  } else {
    alert("You chose " + numberOfCharacters + " characters")
  }
  // 2. lowercase characters
  var lowercaseLetters = prompt("Lowercase letters? OK = YES Cancel = NO");
  if (lowercaseLetters == true) {
    alert("You chose to have LOWERCASE LETTERS in your password");
    lowercaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    passwordCriteria = passwordCriteria.concat(lowercaseLetters);
    }
  // 3. uppercase characters
  var uppercaseLetters = prompt("Uppercase letters? OK = YES Cancel = NO");
  if (uppercaseLetters == true) {
    alert("You chose to have UPPERCASE LETTERS in your password");
    uppercaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    passwordCriteria = passwordCriteria.concat(uppercaseLetters);
    }
  // 4. numbers
  var numbers = prompt("Numbers? OK = YES Cancel = NO");
  if (numbers == true) {
    alert("You chose to have NUMBERS in your password")
    numbers = [0,1,2,3,4,5,6,7,8,9];
    passwordCriteria = passwordCriteria.concat(numbers); 
  }
  // 5. special characters
  var specialCharacters = prompt("Special characters? OK = YES Cancel = NO");
  if (specialCharacters == true) {
    alert("You chose to have SPECIAL CHARACTERS in your password");
    specialCharacters = ['!','@','#','$','%','^','&','*','?'];
    passwordCriteria = passwordCriteria.concat(specialCharacters); 
  }  


  
  for (var i=0; i <  passwordCriteria.length; i++) {
    var randomIndex = Math.floor(Math.random() * numberOfCharacters);

  }

  // Display password on to the site
  return 
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
