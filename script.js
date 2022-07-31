var generateBtn = document.querySelector('#generate');

generateBtn.addEventListener('click', writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

function pwdOptions() {
    var length = parseInt(
      prompt('How many characters (8-128)?'),
      10
    );

    if (length <= 8) {
      alert('Password length must be at least 8 characters');
      return null;
    } 
  
    if (length >= 128) {
      alert('Password length must less than 129 characters');
      return null;
    }

  let lowerletters = confirm("Include lowercase Letters? Y/N ");
  console.log(lowerletters);
  
  let letters = confirm("Include capital Letters? Y/N ");
  console.log(letters);

  let numbers = confirm("Include Numbers? Y/N ");
  console.log(numbers);
  
  let special = con("Include Special Characters? Y/N ");
  console.log(special);

  var passwordOptions = {
    length: length,
    special: special,
    numbers: numbers,
    lowerletters: lowerletters,
    letters: letters,
  };

  return passwordOptions;
}

var specialCharacters = [
  '@',
  '%',
  '+',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  var options = pwdOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (options.special) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.numbers) {
    possibleCharacters = possibleCharacters.concat(numberCharacters);
    guaranteedCharacters.push(getRandom(numberCharacters));
  }

  if (options.lowerletters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  if (options.letters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join('');
}
