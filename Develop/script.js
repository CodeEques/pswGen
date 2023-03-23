// Assignment code here

// A function to Generate Password

function generatePassword() {
  
  // Prompting user for password criteria and validating choices
  
  // A password Array variable to concat password positve choices
  pswCrit = "";
  
  // 1. length 8 to 128 characters - minimum number of characters set in the promp
  var numOfChar = prompt("Enter number of characters between 8 to 128", 8);
  if (numOfChar < 8 || numOfChar > 128) {
    alert("please enter a valid number between 8 to 128");
    return;
  } else {
    alert("You chose " + numOfChar + " characters");
  }
  console.log(numOfChar);

  // 2. lowercase characters
  var lowCaseLet = prompt("Lowercase letters?, OK = YES Cancel = NO");
  if (lowCaseLet !== null) {
    alert("You chosen to have LOWERCASE LETTERS in your password");
    lowCaseLet = ['abcdefghijklmnopqrstuvwxyz'];
    pswCrit = pswCrit.concat(lowCaseLet);
    console.log(pswCrit);
  } else {
    alert("NO LOWERCASE LETTERS will be in your password");
  }
    
  // 3. uppercase characters
  var upprCaseLet = prompt("Uppercase letters? OK = YES Cancel = NO");
  if (upprCaseLet != null) {
    alert("You chose to have UPPERCASE LETTERS in your password");
    upprCaseLet = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    pswCrit = pswCrit.concat(upprCaseLet);
    console.log(pswCrit);
  }else {
    alert("NO UPPERCASE LETTERS in your password")
  }
    
  // 4. numbers
  var numbers = prompt("Numbers? OK = YES Cancel = NO");
  if (numbers !== null) {
    alert("You chose to have NUMBERS in your password")
    numbers = [1234567890];
    pswCrit = pswCrit.concat(numbers); 
    console.log(pswCrit);
  } else {
    alert("NO NUMBERS in your password")
  }
  
  // 5. special characters
  var specChar = prompt("Special characters? OK = YES Cancel = NO");
  if (specChar !== null) {
    alert("You chose to have SPECIAL CHARACTERS in your password");
    specChar = ["!@#$%&|~"];
    pswCrit = pswCrit.concat(specChar); 
    console.log(pswCrit);
  } else {
    alert("NO SPECIAL CHARACTERS in your password")
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
