var yourName = prompt("Please type your name.");
var firstLetter = yourName.slice(0,1);
var leftLetter = yourName.slice(1,yourName.length);
var upperLetter = firstLetter.toUpperCase();
var lowerLetter = leftLetter.toLowerCase();
var final = upperLetter + lowerLetter;
alert("Hello, "+final);