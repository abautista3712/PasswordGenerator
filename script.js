// // Make array with 4 numbers corresponding to different character types
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
var userInputLength = prompt("Please select a password length between 8-128");

function passLengthLimit() {
  if (parseInt(userInputLength) < 8) {
    alert("Please select a password between 8-128 characters");
  } else if (parseInt(userInputLength) > 128) {
    alert("Please select a password between 8-128 characters");
  }
}
// // Can likely add function to consolidate function for character type below
function rNGUpperCase() {
  for (i = 0; i < userInputLength; i++) {
    document.write(upperCaseArr[Math.floor(Math.random() * 26)]);
  }
}

function rNGLowerCase() {
  for (i = 0; i < userInputLength; i++) {
    document.write(lowerCaseArr[Math.floor(Math.random() * 26)]);
  }
}

function rNGNumber() {
  for (i = 0; i < userInputLength; i++) {
    document.write(numCharArr[Math.floor(Math.random() * 10)]);
  }
}

function rNGSpecial() {
  for (i = 0; i < userInputLength; i++) {
    document.write(specialCharArr[Math.floor(Math.random() * 33)]);
  }
}

// Code below is for checking for functionality.
if (userInputLength < 8) {
  passLengthLimit();
} else if (userInputLength > 128) {
  passLengthLimit();
} else {
  rNGUpperCase();
  rNGLowerCase();
  rNGNumber();
  rNGSpecial();
}
