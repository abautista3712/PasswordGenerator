// Variables
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
var charArr = [lowerCaseArr, upperCaseArr, numCharArr, specialCharArr];
// -> for user input prompt
var inputLength = document.querySelector("#inputLength");

// Functions
// -> for lower and upper limits on password character length
function passLengthLimit() {
  if (parseInt(inputLength.value) < 8) {
    alert("Please select a password between 8-128 characters");
  } else if (parseInt(inputLength.value) > 128) {
    alert("Please select a password between 8-128 characters");
  }
}
// -> for linking random number generator with 4 character types
function rNGLowerCase() {
  for (i = 0; i < inputLength.value; i++) {
    document.write(lowerCaseArr[Math.floor(Math.random() * 26)]);
  }
}
function rNGUpperCase() {
  for (i = 0; i < inputLength.value; i++) {
    document.write(upperCaseArr[Math.floor(Math.random() * 26)]);
  }
}
function rNGNumber() {
  for (i = 0; i < inputLength.value; i++) {
    document.write(numCharArr[Math.floor(Math.random() * 10)]);
  }
}
function rNGSpecial() {
  for (i = 0; i < inputLength.value; i++) {
    document.write(specialCharArr[Math.floor(Math.random() * 33)]);
  }
}

// Function Calls
// -> testing for functionality / not final function call
document.querySelector("#generatePass").onclick = function() {
  if (inputLength.value < 8) {
    passLengthLimit();
  } else if (inputLength.value > 128) {
    passLengthLimit();
  } else {
    rNGUpperCase();
    rNGLowerCase();
    rNGNumber();
    rNGSpecial();
  }
};
