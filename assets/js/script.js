// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  document.getElementById("password").innerHTML = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let pwdLength = prompt("Desired password length ( 8-128 characters)?");
  console.log(pwdLength);
  
  let letters = prompt("Include Capital Letters? Y/N ");
  console.log(letters);

  let numbers = prompt("Include Numbers? Y/N ");
  console.log(numbers);
  
  let special = prompt("Include Special Characters? Y/N ");
  console.log(special);

  letters = letters.toUpperCase();
  numbers = numbers.toUpperCase();
  special = special.toUpperCase();

  var password1         = '';
  var characters1       = 'abcdefghijklmnopqrstuvwxyz'
  var characters2       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var characters3       = '0123456789'
  var characters4       = "!@#$%^&*()"

  var charactersLength = characters1.concat(characters2, characters3, characters4);

  if ( letters === "Y" & numbers === "Y" & special === "Y") {
    for ( var i = 0; i < pwdLength; i++ ) {
    password1 += charactersLength.charAt(Math.floor(Math.random() * charactersLength.length));}
      } else { 
      }
  
  if ( letters === "Y" & numbers === "Y" & special === "N") {
    for (var i = 0; i < pwdLength; i++) {
      password1 += characters1.concat(characters2, characters3).charAt(Math.floor(Math.random() * charactersLength.length));
        }
      } else{    
      }

 if ( letters === "Y" & numbers === "N" & special === "N") {
    for (var i = 0; i < pwdLength; i++) {
      password1 += characters1.concat(characters2).charAt(Math.floor(Math.random() * charactersLength.length));
         }
      } else{    
      }
    
  if ( letters === "Y" & numbers === "N" & special === "Y") {
    for (var i = 0; i < pwdLength; i++) {
      password1 += characters1.concat(characters2, characters4).charAt(Math.floor(Math.random() * charactersLength.length));
          }
      } else{    
      }
     
  if ( letters === "N" & numbers === "N" & special === "N") {
    for (var i = 0; i < pwdLength; i++) {
      password1 += characters1.charAt(Math.floor(Math.random() * charactersLength.length));
          }
      } else{    
      }   

  if ( letters === "N" & numbers === "Y" & special === "N") {
    for (var i = 0; i < pwdLength; i++) {
      password1 += characters1.concat(characters3).charAt(Math.floor(Math.random() * charactersLength.length));
          }
      } else{    
      }

  if ( letters === "N" & numbers === "N" & special === "Y") {
    for (var i = 0; i < pwdLength; i++) {
      password1 += characters1.concat(characters4).charAt(Math.floor(Math.random() * charactersLength.length));
          }
      } else{    
      }

  if ( letters === "N" & numbers === "Y" & special === "Y") {
    for (var i = 0; i < pwdLength; i++) {
      password1 += characters1.concat(characters3, characters4).charAt(Math.floor(Math.random() * charactersLength.length));
          }
      } else{    
      }

console.log(password1);
return password1;
}

//psuedoCode
//prompt = length
  // let pwdLength = prompt("How many characters");
    //console.log(pwdLength);
//confirm - lowercase, uppercase, numeric, special characters
  // let numbers = confirm("Do you want numbers");
      //console.log(numbers);
//create var to hold answer to prompt/confirm
//function to validate user answers
//if and equality operators
  // if(numbers){
  // }
  // list of numbers, special chars, uppercase, lowercase
    //array
    // combine all arrays in 1 array
//generate random password
//return password
  