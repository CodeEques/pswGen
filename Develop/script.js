// Assignment code here

// A function to Generate Password

function generatePassword() {
  
  // Prompting user for password criteria and validating choices
  
  // 1. length 8 to 128 characters - minimum number of characters set in the promp
  var numOfChar = prompt("Enter number of characters between 8 to 128", 8);
  if (numOfChar < 8 || numOfChar > 128) {
    alert("please enter a valid number between 8 to 128");
    return;
  } else {
    alert("You chose " + numOfChar + " characters");
    // An array variable to concat password criteria
    pswCrit = "";
  }
  // 2. lowercase characters
  var lowCaseLet = prompt("Lowercase letters?, OK = YES Cancel = NO");
  if (lowCaseLet !== null) {
    alert("CONFIRMED LOWERCASE LETTERS");
    lowCaseLet = ['abcdefghijklmnopqrstuvwxyz'];
    pswCrit = pswCrit.concat(lowCaseLet);
  } else {
    alert("NO LOWERCASE LETTERS");
  }
  // 3. uppercase characters
  var upprCaseLet = prompt("Uppercase letters? OK = YES Cancel = NO");
  if (upprCaseLet != null) {
    alert("CONFIRMED UPPERCASE LETTERS ");
    upprCaseLet = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    pswCrit = pswCrit.concat(upprCaseLet);
  }else {
    alert("NO UPPERCASE LETTERS")
  }
  // 4. numbers
  var numbers = prompt("Numbers? OK = YES Cancel = NO");
  if (numbers !== null) {
    alert("CONFIRMED NUMBERS");
    numbers = [1234567890];
    pswCrit = pswCrit.concat(numbers); 
  } else {
    alert("NO NUMBERS in your password");
  }
  // 5. special characters
  var specChar = prompt("Special characters? OK = YES Cancel = NO");
  if (specChar !== null) {
    alert("CONFRIMED SPECIAL CHARACTERS");
    specChar = ["!@#$%&|~"];
    pswCrit = pswCrit.concat(specChar); 
  } else {
    alert("NO SPECIAL CHARACTERS")
  }
  // Randomizing the password criteria 

  var password = "";

  for (var i=0; i < numOfChar; i++) {
    var randomIndex = Math.floor(Math.random() * pswCrit.length);
    password += pswCrit.substring(randomIndex, randomIndex +1);
  }
  // Display password on to the site
  return document.getElementById("password").value = password;
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
