// -----Variables-----
// -> for arrays containing string values for 4 different character types
var lowerCaseArr = [
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
  "z"
];
var upperCaseArr = lowerCaseArr.map(function(x) {
  return x.toUpperCase();
});
var numCharArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharArr = [
  "\u0020",
  "\u0021",
  "\u0022",
  "\u0023",
  "\u0024",
  "\u0025",
  "\u0026",
  "\u0027",
  "\u0028",
  "\u0029",
  "\u002A",
  "\u002B",
  "\u002C",
  "\u002D",
  "\u002E",
  "\u002F",
  "\u003A",
  "\u003B",
  "\u003C",
  "\u003D",
  "\u003E",
  "\u003F",
  "\u0040",
  "\u005B",
  "\u005C",
  "\u005D",
  "\u005E",
  "\u005F",
  "\u0060",
  "\u007B",
  "\u007C",
  "\u007D",
  "\u007E"
];
// -> for consolidating arrays
var charArr = [];
var allArray = [lowerCaseArr, upperCaseArr, numCharArr, specialCharArr];
var allNode = ["#lowerCheck", "#upperCheck", "#numberCheck", "#specialCheck"];
// -> for targeting specific HTML elements
var targetPassword = document.querySelector("#password");
var inputLength = document.querySelector("#inputLength");

// -----Functions-----
// -> for lower and upper limits on password character length
function passLengthLimit() {
  if (parseInt(inputLength.value) < 8) {
    alert("Please select a password between 8-128 characters");
  } else if (parseInt(inputLength.value) > 128) {
    alert("Please select a password between 8-128 characters");
  }
}
// -> for adding arrays to charArr
function addArray(array, node) {
  if (charArr.includes(array) === false) {
    if (document.querySelector(node).checked === true) {
      charArr.push(array);
    }
  }
}
function removeArray(array, node) {
  if (charArr.includes(array) === true) {
    if (document.querySelector(node).checked === false) {
      charArr.pop(array);
    }
  }
}
function checkAllArray() {
  for (i = 0; i < 4; i++) {
    removeArray(allArray[i], allNode[i]);
    addArray(allArray[i], allNode[i]);
  }
}
// -> for selecting which of the four character type arrays to use
function assignCharArr() {
  for (j = 0; j < 1; j++) {
    return charArr[Math.floor(Math.random() * charArr.length)];
  }
}
// -> for selecting what specific character to use from the chosen array
function assignCharValue() {
  var targetArr = assignCharArr();
  for (k = 0; k < targetArr.length; k++) {
    return targetArr[Math.floor(Math.random() * targetArr.length)];
  }
}
// for repeating the character selection function assignCharValue()
function assignCharLength(_string, times) {
  var repeatString = "";
  while (times > 0) {
    repeatString += assignCharValue();
    times--;
  }
  return repeatString;
}

// -----Function Calls-----
// -> adds onclick event for Generate Password button.
// -> when clicked function call checks user input to be within defined character limits.
// -> if within limit, function call will will run assignCharLength() and repeat the function in accordance with user input for password length.
document.querySelector("#generatePass").addEventListener("click", function() {
  if (inputLength.value < 8) {
    passLengthLimit();
  } else if (inputLength.value > 128) {
    passLengthLimit();
  } else {
    checkAllArray();
    targetPassword.innerHTML = assignCharLength(String, inputLength.value);
  }
});

document.querySelector("#copyBtn").addEventListener("click", function() {
  var passwordLoc = document.querySelector("#password");
  passwordLoc.select();
  document.execCommand("copy");
  document.getSelection().removeAllRanges();
});
